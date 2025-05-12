// import gsap from 'gsap';

// import SplitText from 'gsap/SplitText'


gsap.registerPlugin(SplitText);
document.addEventListener('DOMContentLoaded', () => {
   
    const profileImgEl = document.querySelector('.profile-image');
    const profileImages = document.querySelectorAll('.profile-image .img');
    const nameElement = document.querySelectorAll('.profile-name .name');
    const nameHeading = document.querySelectorAll('.profile-name .name h1');

    nameHeading.forEach((heading) => {
        const split = new SplitText(heading, {type:"chars"});
        split.chars.forEach((char) => {
            char.classList.add("letter")
        })
    })

    const defaultLetters = nameElement[0].querySelectorAll(".letter");
    gsap.set(defaultLetters, { y: '100%'});

    if (window.innerWidth  >  900) {
        profileImages.forEach((img, index) => {
            const correspondingName = nameElement[index+1];
            const letters = correspondingName.querySelectorAll(".letter");

            img.addEventListener("mouseenter", ()=> {
                console.log("enter")
                gsap.to(img, {
                    width: 200,
                    height: 200,
                    duration: 0.5,
                    ease: 'power4.out'
                })

                gsap.to(letters, {
                    y: '-100%',
                    ease: 'power4.out',
                    duration: 0.75,
                    stagger :{
                        each: 0.025,
                        from: 'center'
                    }
                })
            })

            img.addEventListener("mouseleave", () => {
                console.log("LEft")
                gsap.to(img, {
                    width: 100,
                    height: 100,
                    duration:0.5,
                    ease:'power4.out'
                });

                gsap.to(letters, {
                    y: '0%',
                    ease: 'power4.out',
                    duration: 0.75,
                    stagger :{
                        each: 0.025,
                        from: 'center'
                    }
                })
            })
        })

        profileImgEl.addEventListener('mouseenter', () => {
            console.log("Hello")
            gsap.to(defaultLetters, {

                y: '0%',
                ease: 'power4.out',
                duration: 0.75,
                    stagger :{
                        each: 0.025,
                        from: 'center'
                    }
            })
        })

        profileImgEl.addEventListener('mouseleave', () => {
            gsap.to(defaultLetters, {
                y: '100%',
                ease: 'power4.out',
                duration: 0.75,
                stagger :{
                    each: 0.025,
                    from: 'center'
                }
            })
        })
    }
})