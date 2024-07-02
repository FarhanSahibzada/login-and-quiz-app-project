let user = document.getElementById("username");
let email = document.getElementById("gmail");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let form2 = document.getElementById("form2");
form2.style.display = "none";
let form1 = document.getElementById("form1");

let loginame = document.getElementById("name2");

let already = document.getElementById("already");
// sign up form
submit.addEventListener("click", () => {
  var users = user.value;
  var emails = email.value;
  var passwords = password.value;

  if ((users || emails || passwords) == "") {
    Swal.fire({
      text: "Empty input",
      icon: "error",
    })
  }
  else {
    let key = Object.keys(localStorage);
    var flag = false;
    for (var keys of key) {
      var avail = JSON.parse(localStorage.getItem(keys));
      console.log(flag);
      if (keys == users) {
        Swal.fire({
          text: " name exist",
          icon: "error",
        });
        flag = true;
        break
        
      }
      if (avail.email == emails) {
        Swal.fire({
          text: "email exist",
          icon: "error",
        });
        flag = true;
        break
      }
    }
    console.log(flag);
    if (flag == false) {
      han();
      
    }
  }
});

function han() {
  var users = user.value;
  var emails = email.value;
  var passwords = password.value;
  const userr = {
    name: users,
    password: passwords,
    email: emails
  }
  localStorage.setItem(users, JSON.stringify(userr));
  form1.style.display = " none";
  form2.style.display = "block";
  Swal.fire({
    title: "account created",
    icon: "success",
  });
}

already.addEventListener("click", function () {
  form1.style.display = "none";
  form2.style.display = "block";

})



//       log in form

let cemail = document.getElementById("cgmail");
let cpassword = document.getElementById("cpassword");
let login = document.getElementById("login");

login.addEventListener("click", () => {
  let cemails = cemail.value;
  let cpasswords = cpassword.value;
  if ((cemails || cpasswords) == "") {
    Swal.fire({
      text: "Empty input",
      icon: "error",
    })
  }
  else {
    localStorage.setItem("Names",JSON.stringify(loginame.value));
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      let local = JSON.parse(localStorage.getItem(key));
      console.log(local);
      if (local) {
        if (local.email == cemails) {
          if (local.password == cpasswords) {
            window.location.href = "quiz.html";
          } else {
            Swal.fire({
              text: "wrong password",
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            text: "wrong email",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          text: "No account found",
          icon: "error",
        });
      }
    }
  }
});

let i = document.querySelectorAll("i");
function display() {
  if (user.value === "") {
    i[0].style.display = "block";
  } else {
    i[0].style.display = "none";
  }
  if (email.value === "") {
    i[1].style.display = "block";

  } else {
    i[1].style.display = "none";
  }
  if (password.value === "") {
    i[2].style.display = "block";

  } else {
    i[2].style.display = "none";
  } if (loginame.value === "") {
    i[3].style.display = "block";

  } else {
    i[3].style.display = "none";
  } if (cemail.value === "") {
    i[4].style.display = "block";

  } else {
    i[4].style.display = "none";
  }
  if (cpassword.value === "") {
    i[5].style.display = "block";

  } else {
    i[5].style.display = "none";
  }

}