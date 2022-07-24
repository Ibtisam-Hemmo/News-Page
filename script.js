
let user = document.querySelector('#name');
let comment = document.querySelector('#comment');
let btn = document.querySelector('#btn-add');
let output = document.querySelector('#output');

let comments =[];

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    addComment(user.value, comment.value);
})

function addComment(user,comment) {
    if(user !== ''){
        const commentObj = {
            id : Date.now(),
            name : user,
            commentLine : comment,
        }
        comments.push(commentObj);
        addToLocalStorage(comments);
        user.value = null;
        comment.value = null;
    }
}

function displayComment(comments) {
    output.innerHTML = '';
    comments.forEach(function(x) {
    const div = document.createElement('div');
    div.setAttribute('id', 'outpu');
    div.innerHTML = `
    <img src="./assets/avatar.jpg" alt="" class="avatar">
    <div>
        <h5>${x.name}</h5>
        <p>${x.commentLine}</p> <hr size = "3" width = "80%" >
    </div>
    `;
    output.append(div);
    user.value = null;
    comment.value = null;
});
}

function addToLocalStorage(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComment(comments);
}

function getFromLocalStorage(comments) {
    const reference = localStorage.getItem('comments');
    if(reference) {
        comments = JSON.parse(reference);
        displayComment(comments);
    }
}

getFromLocalStorage();

