import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my-secret-password',
    });
  }

  async validate(payload: any): Promise<any> {
    console.log(
      'jwt validate username: ' + payload.username + ' sub' + payload.sub,
    );
    return { id: payload.sub, username: payload.username };
  }
}