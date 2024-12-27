import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { supabase } from 'src/supabaseClient';
import { SignInDto } from './dto/signin.dto';
import { error } from 'console';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signup(signupDto: SignupDto) {
    const { email, password, ...rest } = signupDto;

    const { data: userExists } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const { error } = await supabase
      .from('users')
      .insert([{ email, password: hashedPassword, ...rest }]);

    if (error) {
      throw new BadRequestException(error.message);
    }

    return { message: 'User created successfully' };
  }

  //sign in here
  async signin(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (!user || error) {
      throw new BadRequestException('Invalid credentials');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { accessToken: token, msg: 'Logged in successfully' };
  }
}
