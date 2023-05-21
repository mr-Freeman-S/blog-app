import React from 'react';
import {Card} from 'react-bootstrap';
import myPhoto from './../../assets/img/myPhoto.jpg'


export const AboutMePage = () => {
  return (
    <div className='flex-row'>
      <Card border='primary' style={{width: '18rem', margin: 'auto'}}>
        <Card.Img src={myPhoto}/>
      </Card>
      <Card>
        <Card.Header>Слава Баранок</Card.Header>
        <Card.Body>
          <Card.Text>Я опытный фронтенд разработчик с более чем годом опыта работы, специализирующийся на React и React
            Native. Я владею языком программирования TypeScript и использую его для создания более безопасного и
            понятного кода. Мои навыки включают в себя разработку динамических интерфейсов, создание высококачественных
            пользовательских интерфейсов и развертывание приложений на мобильных и веб-платформах. Я успешно работал в
            командах разработчиков, аналитиков и дизайнеров для создания эффективных и интуитивно понятных
            пользовательских интерфейсов. Я готов принять вызов и создавать великолепные приложения, которые будут
            привлекать и удерживать пользователей.</Card.Text>
        </Card.Body>
        <Card.Footer>Contacts: Email: <a href="mailto:mr.baranok.slava@gmail.com">mr.baranok.slava@gmail.com</a>;
          LinkedIn: <a target='_blank' href="https://www.linkedin.com/in/slava-baranok/"
                       rel="noreferrer">https://www.linkedin.com/in/slava-baranok/</a>;<br/>
            Resume: <a href="https://hh.ru/resume/6728014cff0b7b742a0039ed1f59626f63524f">RESUME HH.RU</a>;
        </Card.Footer>
      </Card>
    </div>
  );
};

