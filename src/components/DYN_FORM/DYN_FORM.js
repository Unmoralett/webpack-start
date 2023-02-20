import './DYN_FORM.scss';
import '../Input/Input';

const btn = document.querySelector('.addForm');

class DYN_FORM extends HTMLElement {
  constructor() {
    super();
    this.formDef1 = [
      { label: 'Название сайта', kind: 'longtext', name: 'sitename' },
      { label: 'URL сайта', kind: 'longtext', name: 'siteurl' },
      { label: 'Посетителей в сутки', kind: 'number', name: 'visitors' },
      { label: 'Email для связи', kind: 'shorttext', name: 'email' },
      {
        label: 'Рубрика каталога',
        kind: 'combo',
        name: 'division',
        variants: [
          { text: 'здоровье', value: '1' },
          { text: 'домашний уют', value: '2' },
          { text: 'бытовая техника', value: '3' },
        ],
      },
      {
        label: 'Размещение',
        kind: 'radio',
        name: 'payment',
        variants: [
          { text: 'бесплатное', value: '1' },
          { text: 'платное', value: '2' },
          { text: 'VIP', value: '3' },
        ],
      },
      { label: 'Разрешить отзывы', kind: 'check', name: 'votes' },
      { label: 'Описание сайта', kind: 'memo', name: 'description' },
      { caption: 'Опубликовать', kind: 'submit' },
    ];

    this.formDef2 = [
      { label: 'Фамилия', kind: 'longtext', name: 'lastname' },
      { label: 'Имя', kind: 'longtext', name: 'firstname' },
      { label: 'Отчество', kind: 'longtext', name: 'secondname' },
      { label: 'Возраст', kind: 'number', name: 'age' },
      { caption: 'Зарегистрироваться', kind: 'submit' },
    ];
  }

  connectedCallback() {
    btn.addEventListener('click', this.render);
  }

  render = () => {
    this.innerHTML = `
            <form action='https://fe.it-academy.by/TestForm.php' method='post' target='_blank'>
              <dyn-input list='${JSON.stringify(this.formDef1)}'></dyn-input>
            </form><hr>
            <form action='https://fe.it-academy.by/TestForm.php' method='post' target='_blank'>
              <dyn-input list='${JSON.stringify(this.formDef2)}'></dyn-input>
            </form><hr>
          `;
  };
}

customElements.define('dyn-form', DYN_FORM);
