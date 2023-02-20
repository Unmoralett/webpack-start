import './Input.scss';

class Input extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        ${JSON.parse(this.getAttribute('list'))
          .map((item) => {
            if (item.kind == 'longtext') {
              return `
                  <div class='elem'>
                    <label for='${item.name}'>${item.label}</label>
                    <input type='text' class='longinput' name='${item.name}'>
                  </div>`;
            } else if (item.kind == 'shorttext') {
              return `
                    <div class='elem'>
                      <label for='${item.name}'>${item.label}</label>
                      <input type='text' class='shortinput' name='${item.name}'>
                    </div>`;
            } else if (item.kind == 'combo') {
              return `
                  <div class='elem'>
                    <label for='${item.name}'>${item.label}</label>
                    <select name='${item.name}' size='1'>
                      <option value='${item.variants[0].value}'>${item.variants[0].text}</option>
                      <option value='${item.variants[1].value}'>${item.variants[1].text}</option>
                      <option selected value='${item.variants[2].value}'>${item.variants[2].text}</option>
                    </select>
                  </div>`;
            } else if (item.kind == 'radio') {
              return `
                  <div class='elem'>
                    <label for='${item.name}'>${item.label}</label>
                    <input type="radio" name="elem1" value='${item.variants[0].value}'><label for="elem1">${item.variants[0].text}</label>
                    <input type="radio" name="elem2" value='${item.variants[1].value}'><label for="elem2">${item.variants[1].text}</label>
                    <input type="radio" name="elem3" value='${item.variants[2].value}'><label for="elem3">${item.variants[2].text}</label>
                  </div>`;
            } else if (item.kind == 'check') {
              return `
                  <div class='elem'>
                    <label for='${item.name}'>${item.label}</label>
                    <input type='checkbox' name='${item.name}'>
                  </div>`;
            } else if (item.kind == 'memo') {
              return `
                    <div class='elem'>
                      <label for='${item.name}'>${item.label}</label><br>
                      <textarea name='${item.name}' rows='5' cols='40'></textarea>
                    </div>`;
            } else if (item.kind == 'submit') {
              return `
                      <div class='elem'>
                        <button type='${item.kind}'>
                        ${item.caption}
                        </button>
                      </div>`;
            } else
              return `
                    <label for='${item.name}'>${item.label}</label>
                    <input type='${item.kind}' name='${item.name}' class='input''><br>
                    
                 `;
          })
          .join(' ')}
    `;
  }
}

customElements.define('dyn-input', Input);
