// listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event){
    event.preventDefault();


//   Get forms elements
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as  HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

//**
    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;

    //Check if all form of elements are present

    if (
        profilePictureInput && 
        nameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        experienceElement && 
        skillsElement &&

//**
        
        usernameElement
    
    
    
    )  {

    //   Get values from form
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

//**
const username = usernameElement.value;
const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`        
    
// For Profile Image
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : ''; 



    //Create Resume Output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile picture  class="profilePicture">` : "" }
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
    <p><strong>Email:</strong> <span id="edit-edit" class="editable"> ${email} </span></p>
    <p><strong>phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
    
    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>
    `;
//**
const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download Your 2024 Resume';




    //Display Resume Output
    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

        // create container for buttons
        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        // Add Download pdf button
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
            window.print(); // open the print dialog, allowing the user to save as pdf.
        });
        buttonsContainer.appendChild(downloadButton);

        // Add Shareable Link Button
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", async () => {
            try {
                // Create a unique shareable link (stimulate it in this case)
                const shareableLink = `https://yourdomain.com/resumes/${name.replace(
                    /\s+/g,
                    "_"
                )}_cv.html`;

            //  Use Clipboard API to copy the shareable link
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy link: ", err);
            alert("Failed to copy link to clipboard. Please try again.");
        }
        });
        buttonsContainer.appendChild(shareLinkButton);
    } else {
        console.error("resume output container not found");
    }
} else {
    console.error("Forms elements are missing");
}
})

//**  
// resumeOutputElement.appendChild(downloadLink)

//         resumeOutputElement.style.display = "block";
//     // } else {
//     //     console.error('the resume output element are missing')
//     makeEditable();
//     }
//     }else{
//         console.error('one or more output elements are missing.');
//     }
// });

// function makeEditable(){
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click' , function(){
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "" ;

//             // replace content
//             if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
//                 const input = document.createElement('input')
//                 input.type = 'text'
//                 input.value = currentValue
//                 input.classList.add('editing.input')
//                 input.addEventListener('blur' , function(){
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline'
//                     input.remove()
//                 })
//                 currentElement.style.display = 'none'
//                 currentElement.parentNode?.insertBefore(input, currentElement)
//                 input.focus()
//             }
//         })
//     })
// }