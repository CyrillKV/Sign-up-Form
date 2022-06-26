function PwdCheck(){
  let pwd1 = document.querySelector("#pwd").value;
  let pwd2 = document.querySelector("#pwd_confirm").value;
  return pwd1===pwd2 ? true : false;
}

const pwds = document.querySelectorAll("[type='password']");
pwds.forEach(pwd => pwd.addEventListener('change', () => {
  let pwd = document.querySelector(".validator");
  if (PwdCheck()){
    pwd.classList.add('valid');
    pwd.textContent = '*valid';
  }else{
    pwd.classList.remove('valid')
    pwd.textContent = '*invalid';
  }
}));