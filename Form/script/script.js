let currentTab = 0;
let interests = []
const details = {
    name: "",
    email: ""
}

const name = document.querySelector('.name--value');
const email = document.querySelector('.email--value');
const topics = document.querySelector('.topics--summary');
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function showTab() {
    const tabArray = document.querySelectorAll('.tab');
    console.log(tabArray);
 
    for (let i = 0; i < tabArray.length; i++) {
        tabArray[i].style.display = 'none';
    }
    tabArray[currentTab].style.display = 'block';


    const dots = document.getElementsByClassName('step');
    for(let i = 0;i<dots.length;++i) {
        if(i <= currentTab) dots[i].classList.add('visited')

        if(currentTab == i) dots[i].classList.add('active')
        else dots[i].classList.remove('active')
    }

    if(currentTab == 2) {
        name.innerHTML = details.name;
        email.innerHTML = details.email;
        let topicsHTML = '';
        interests.forEach((topic) => {
            topicsHTML += `<li>${topic}</li>`;

        })
        topics.innerHTML = topicsHTML;
        
    }
}

function renderOptions() {
    const options = document.getElementsByClassName('topic');
    for (let i = 0; i < options.length; i++) {

        let topicName = options[i].value;
        if(interests.includes(topicName)) {
            options[i].style.backgroundColor = '#652CD1';
        }
        else options[i].style.backgroundColor = '#394150';
    }
}

document.querySelectorAll('.submit-btn').forEach((btn) => {
    btn.addEventListener('click',(e) => {
        e.preventDefault();
        if(currentTab == 0) {
            if(details.name == '' || details.email == '') {
                alert(`${details.name == '' ? 'Enter valid name': ''} \n${(!details.email.match(validRegex) && details.email.indexOf('@') < 0) ? "Invalid Email" : ''}`);
                return;
            }
            
        }
        else if(currentTab == 1) {
            if(interests.length == 0) {
                alert("Select atleast 1 topic..")
            }
        }
        else if(currentTab == 2) {
            alert('✅ Success');
            return;
        }
        currentTab++;
        console.log(currentTab);
        showTab();
        
    });
})



document.querySelectorAll('.topic').forEach(elem => {
    elem.addEventListener('click',(e) => {
        let topic = e.target.value;
        let newInterest = interests;
        if(newInterest.includes(topic)) {
            newInterest = interests.filter((item) => item != topic);
            
        }else {
            newInterest.push(topic);
        }
    
        interests = newInterest;
    
        renderOptions();
    })
})

document.querySelector('.inputBox1').addEventListener('change',(e) => {
    details.name = e.target.value;
})

document.querySelector('.inputBox2').addEventListener('change',(e) => {
    details.email = e.target.value;
})

showTab(currentTab);
