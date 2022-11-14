// 유저가 값을 입력
// +버튼을 누르면 할 일이 추가
// 삭제버튼을 누르면 할 일이 삭제
// 체크버튼을 누르면 할 일이 끝나면서 밑줄
// 진행 중 끝남 탭을 누르면, 바가 언더바가 이동
// 끝남 탭은, 끝난 아이템만 / 진행 중 탭은 진행 중인 아이템만
// 전체 탭은, 다시 전체 아이템으로 돌아옴

let taskinput = document.getElementById("task-input");
let addbutton = document.getElementById("add-button");
let tasklist = [];

addbutton.addEventListener("click",addtask);

function addtask(){
    let taskcontent = taskinput.value;
    tasklist.push(taskcontent);
    console.log(tasklist);
    render();
}

function render(){
    let resultHTML = "";
    for(let i=0;i<tasklist.length;i++){
        resultHTML+=`<div class="task">
        <div>
            ${tasklist[i]}
        </div>
        <div>
            <button>CHECK</button>
            <button>DELETE</button>
        </div>
    </div>`;
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}