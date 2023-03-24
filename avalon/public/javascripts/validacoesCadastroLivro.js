
// window.addEventListener('load', function () {
//   const form = document.querySelector('form.form-crud');
//   const inputList = document.querySelectorAll('form.form-crud input');
//   let hasErrors = false;
//   let hasFormErrors = false;

//   const removeErrors = function (errorType) {
//     if (errorType === 'form') {
//       hasFormErrors = false;
//     } else {
//       hasErrors = false;
//     }

//     const errorSpans = document.querySelectorAll('form.form-crud span.error');
//     errorSpans.forEach(span => span.remove());
//   };

//   const createError = function (input, mensagem, errorType) {
//     if (errorType === 'form') {
//       hasFormErrors = true;
//     } else {
//       hasErrors = true;
//     }

//     const errorSpan = document.createElement('span');
//     errorSpan.classList.add('error');
//     errorSpan.innerText = mensagem;
//     input.insertAdjacentElement('beforebegin', errorSpan);
//   };

//   form.addEventListener('submit', function (event) {
//     // Validacao
//     event.preventDefault();
//     removeErrors('form');

//     inputList.forEach(input => {
//       if (!input.value) {
//         createError(input, 'Campo Obrigatório', 'form');
//       }
//     });

//     if (!hasErrors && !hasFormErrors) {
//       this.submit();
//     }
//   });

//   const validatepreco = function (input) {
//     const { value } = input;
//     if (value.includes('$') && value.length >= max) {
//       return
//     } else {
//       createError(input, 'O campo deve conter $ ', 'input');
//     }
//   };

//   const validatepublicacao = function (input) {
//     const { value } = input;
//     if (value.includes('/') && value.includes('.')) {
//       return
//     } else {
//       createError(input, 'O campo deve conter / ', 'input');
//     }
//   };

//   const validateLength = function (input, min, max) {
//     const { value } = input;

//     if (value.length >= min && value.length >= max) {
//       return
//     } else {
//       createError(input, `O campo deve ter entre ${min} e ${max} caracteres`, 'input');
//     }
//   }



//   inputList.forEach(input => {
//     input.addEventListener('change', function () {
//       removeErrors('input');

//       switch (input.name) {

//         case 'nome':
//           validateLength(input, 2, 9);
//           break;

//         case 'idioma':
//           validateLength(input, 6, 8);
//           break;

//         case 'publicacao':
//           validatepublicacao(input, 1, 7);
//           break;

//         case 'dimensoes':
//           validateLength(input, 2, 4);
//           break;

//         case 'sinopse':
//           validateLength(input, 10, 20);
//           break;

//         case 'paginas':
//           validateLength(input, 1, 3);
//           break;

//         case 'acabamento':
//           validateLength(input, 2, 4);
//           break;

//         case 'preco':
//           validatepreco(input, 4, 6);
//           break;
//         case 'autor':
//           validateLength(input, 2, 8);
//           break;

//         case 'isbn':
//           validateLength(input, 2, 3);
//           break;

//         case 'editora':
//           validateLength(input, 2, 7);
//           break;
//         default:
//           break;
//       }
//     });
//   });
// });