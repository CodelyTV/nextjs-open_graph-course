import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import satori from 'satori';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await satori(
      {
        type: 'div',
        props: {
          style: {
            backgroundColor: 'black',
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: {
            type: 'h1',
            props: {
              style: { color: 'white', fontSize: '5rem' },
              children: 'Codely',
            },
          },
        },
      },
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Comic Mono',
            data: readFileSync(join(process.cwd(), 'public', 'ComicMono.ttf')),
            weight: 400,
            style: 'normal',
          },
        ],
      },
    );
  }
}
