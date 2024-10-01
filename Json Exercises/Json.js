document.addEventListener("DOMContentLoaded", function() {
    // json format is channged that's why it is commented
    // var data = {
    //     "tasks": {
    //         "Cut Grass": false,
    //         "Clean Room": false,
    //         "Go to Gym": true,
    //         "Make Dinner": false
    //     }
    // };

    var data = '[{"info":"Cut Green","status":false},{"info":"Clean Room","status":false},{"info":"Go to Gym","status":true},{"info":"Make Dinner","status":false}]';

    var dataJSON = JSON.parse(data);
    console.log(dataJSON);
    

    var tasklist = document.querySelector('#taskList');

    for (var key in dataJSON) {
        console.log(key, dataJSON[key]);

        var status = dataJSON[key].status ? 'checked' : '';
        var html = `<li>${dataJSON[key].info}<input type="checkbox" value="${key}" ${status}></li>`;

        tasklist.innerHTML += html;
        
    }

    const addEvent = () =>{
        let checkBoxes = document.querySelectorAll('#taskList input[type="checkbox"]');
        for(let index in checkBoxes){
            checkBoxes[index].onchange = updateJson;
        }
    }

    const updateJson = () =>{
        var key = event.target.value;
        dataJSON[key].status=event.target.checked;
        // console.log(dataJSON);
        console.log(`${dataJSON[key].info} : ${dataJSON[key].status}`);

    }

    addEvent();

    // console.log(dataJSON);
});








// console.log(data);









// var data ={
//     "tasks":{
//     "Cut Grass":false,
//     "Clean Room":false,
//     "Go to Gym":true,
//     "Make Dinner": false,
//    }
// };

// console.log(data);

