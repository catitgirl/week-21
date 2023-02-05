class Cat {
    constructor(bride, petName, gender, catAge, about) {
        this.bride = bride;
        this.petName = petName;
        this.gender = gender;
        this.catAge = catAge;
        this.about = about;

    }
}
const prototype = new Cat(bride, petName, gender, catAge, about);

document.querySelector('select').addEventListener('change', function () {

    prototype.bride = (this).value;

});
add.addEventListener('click', () => {
    const catName = document.getElementById('petName').value;
    const radiobutton = document.querySelectorAll('input[name="gender"]');
    const catYars = document.getElementById('catAge').value;
    const catAbout = document.getElementById('about').value;
    prototype.petName = catName;
    prototype.catAge = catYars;
    prototype.about = catAbout;
    for (let gen1 of gender) {
        if (gen1.checked) {
            prototype.gender = gen1.value;
        }
    }

    console.log(prototype);
});