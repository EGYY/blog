import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const docsConfig = new DocumentBuilder()
        .setTitle('Блог Женьки')
        .setDescription('Документация rest api для блога')
        .setVersion('1.0.0')
        .addTag('EGYY')
        .build();
    const documentation = SwaggerModule.createDocument(app, docsConfig);
    SwaggerModule.setup('/api/docs', app, documentation);

    await app.listen(PORT, () => console.log(`Server starting on PORT: ${PORT}`));
}

start();