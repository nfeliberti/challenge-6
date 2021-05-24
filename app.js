// calling all the methods

//inst classes

const ft = new Fetch();
const us = new UI();

// add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const currentVal = search.value;
    ft.getCurrent(currentVal).then((data) => {
        // call a ui method
        UI.populateUI(data);

        //call save
        UI.saveToLS(data);
    });
});