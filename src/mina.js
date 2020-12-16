$(document).ready(function() {
    
    //- Open the Editor
    $('.adit').click(function() { $(".imputsHolder").animate({"right": 0})  })

    //- close the Editor
    $('.closeEdit').click(function() { $(".imputsHolder").animate({"right": '-70%'}) })

}) 
// 

var doneButton = document.querySelector('#done');

doneButton.addEventListener('click', ()=> {

    const name = document.getElementById('name');
    const nameInput = document.getElementById('namInput').value;

    const Email = document.getElementById('Email');
    const EmailInput = document.getElementById('EmailInput').value;

    const necName = document.getElementById('necName');
    const necNameInput = document.getElementById('necNameInput').value;

    const EmployNam = document.getElementById('EmployNam');
    const EmployNamInput = document.getElementById('EmployNamInput').value;

    const phone = document.getElementById('phone');
    const phoneInput = document.getElementById('phoneInput').value;

    const dress = document.getElementById('adress');
    const dressInput = document.getElementById('adressInput').value;

    //=
    name.textContent =  nameInput;
    //=
    Email.textContent =  EmailInput;
    document.querySelector('.sidbar .sidInfo .contactInfo .mail').textContent =  EmailInput;
    //=
    EmployNam.textContent =  EmployNamInput;
    //=
    necName.textContent =  necNameInput;
    //=
    dress.textContent =  dressInput;
    //=
    phone.textContent =  phoneInput;


})


// document.getElementById('name').textContent = nameInput.nodeValue



window.onload = function () {
    document.getElementById("downPDF")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("mainCV");
            // console.log(invoice);
            // console.log(window);
            var opt = {
                margin: 0.1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 1 },
                
                // html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                html2canvas : {
                    allowTaint: true,
                    scale: 3,
                    dpi: 100,
                    letterRendering: true,
                    useCORS: true
                }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}




//     var pdf_Button = document.getElementById('downPDF');
//     var pdf_Tergit = document.getElementById('mainCV');
//     pdf_Button.click(function() {
//         var doc = new jsPDF();
//         doc.fromHTML(pdf_Tergit.html(),15, 15,{
//             "width" : 1000
//         })
//     });
// });


// const doc = new jsPDF();

// function converToHTML() {

//     var pdf_Button = document.getElementById('downPDF');
//     var pdf_Tergit = document.getElementById('mainCV');

//     const doc = new jsPDF();
    
//     doc.fromHTML(pdf_Tergit.html(),15, 15,{
//         "width" : 1000
//     })

//     doc.save('pdf_Tergit.pdf')
// }


// $(document).ready(function() {
//     const doc = window.jsPDF = window.jspdf.jsPDF()

//     function converToHTML() {

//         var pdf_Button = document.getElementById('downPDF');
//         var pdf_Tergit = document.getElementById('mainCV');

//         const doc = new jsPDF();
        
//         doc.fromHTML(pdf_Tergit.html(),15, 15,{
//             "width" : 1000
//         })

//         doc.save('pdf_Tergit.pdf')
// }



    // var doc = window.jsPDF = window.jspdf.jsPDF()



    // var elementHTML = $('#contnet').html();

    // var specialElementHandlers = {
    //     '#elementH': function (elementHTML, renderer) {
    //         return true;
    //     }
    // };

    // doc.fromHTML(elementHTML, 15, 15, {
    //     'width': 170,
    //     'elementHandlers': specialElementHandlers
    // });

    // // Save the PDF
    // doc.save('sample-document.pdf');


// });