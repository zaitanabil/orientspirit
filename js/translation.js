document.querySelector('.selected-language').addEventListener('click', function() {
    document.querySelector('.options-container').style.display = 'block';
  });
  
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      let language = this.getAttribute('data-value');
      let languageText = this.innerText;
      let languageFlagSrc = this.querySelector('img').src;
      
      // Update the displayed selected language
      let selectedLanguageDiv = document.querySelector('.selected-language');
      selectedLanguageDiv.innerHTML = `<img src="${languageFlagSrc}" alt="${languageText}"> ${languageText}`;
  
      // Hide the options container
      document.querySelector('.options-container').style.display = 'none';
  
      // Call your function to change the website language
      setLanguage(language);
    });
  });
  
  // Prevent the options container from closing when clicking inside it
  document.querySelector('.options-container').addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  // Close the options container when clicking outside of the custom select
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.custom-select')) {
      document.querySelector('.options-container').style.display = 'none';
    }
  });  

const translations = {
    en: {
        Home: "Home",
        About: "About us",
        Causes: "Our commitment",
        Contact: "Contact",
        Donate: "Donate",
        WelcomeTitle: "Welcome to Orient Spirit Development",
        slideCaptions: [
            { title: "Heartfelt action", description: "Empower change" },
            { title: "Grow together", description: "Support us" },
            { title: "Spread hope", description: "Share our story" }
        ],
        featuredBlocks: [
            "Become a <strong>volunteer</strong>",
            "Explore <strong>creations</strong>",
            "Make a <strong>donation</strong>",
            "Inspire <strong>hope</strong>"
        ],
        OurStoryTitle: "Our story",
        OurStorySubtitle: "Orient Spirit Development, vocational training center",
        OurStoryText: [
            "In our collective journey at Orient Spirit Development, we are united by a shared belief in equity and opportunity for every soul. Our core mission is to embolden those who have been marginalized or face adversities, enriching their lives through vocational training and skills that nurture self-reliance and foster societal acceptance. This endeavor is rooted in the conviction that every individual, regardless of their background or challenges, holds the potential for growth and contribution.",
            "Our approach is anchored in the understanding that all individuals are inherently capable, and with the right guidance, support, and tailored educational opportunities, they can unlock their potential. Through dedicated efforts, we aim to transform lives, advocating for a world where everyone has the chance to lead a fulfilling and independent life, celebrated for their unique contributions to society.",
            "“We all have a place in this world and we all perform a function, regardless of our ability or disability.”"
        ],
        OurMissionTitle: "Our mission",
        OurMissionText: "To unlock potential and inspire success in special needs individuals.",
        OurImpactTitle: "Our impact",
        OurImpactItems: [
            "Dedicated education",
            "Transformative support",
            "Countless lives touched"
        ],
        CTATitle: "Empower futures. <br> Transform lives.",
        CTADonationText: "Make a donation",
        CTAVolunteerText: "Become a volunteer",
        OurCausesTitle: "Our commitment",
        CausesText: [
            {
                title: "Time-honored crafts",
                description: "Emphasizing sewing, carpentry, and other age-old crafts, our center enriches special needs education with the mastery of traditional skills, offering students both a connection to cultural heritage and practical avenues for self-sufficiency.",
                buttonText: "Donate now"
            },
            {
                title: "Nurturing essential life skills",
                description: "Beyond vocational training, we focus on enriching students with vital soft skills including empathy, teamwork, and resilience. These skills are crucial for personal development, fostering a well-rounded individual capable of thriving in various aspects of life.",
                buttonText: "Donate now"
            },
            {
                title: "Green thumbs, bright futures",
                description: "This initiative introduces sustainable gardening and farming. By participating in eco-friendly agriculture, students learn about responsibility, the importance of sustainability, and the joy of growing food that supports both the center and their communities.",
                buttonText: "Donate now"
            }
        ],
        GetInTouch: "Get in touch",
        Subtitle: "<strong>Special Needs Vocational Training</strong>",
        ContactInformation: "Contact information",
        GetDirection: "Get direction",
        quick_links: "Quick links",
        home2: "Home",
        story: "Our story",
        engagement: "Our commitment",
        contactinfo: "Contact information",
        getdirection: "Get direction",
    },
    fr: {
        Home: "Accueil",
        About: "À propos de nous",
        Causes: "Notre engagement",
        Contact: "Contact",
        Donate: "Faire un don",
        WelcomeTitle: "Bienvenue chez Orient Spirit Development",
        slideCaptions: [
            { title: "Action sincère", description: "Donner du pouvoir au changement" },
            { title: "Grandir ensemble", description: "Soutenez-nous" },
            { title: "Répandre l'espoir", description: "Partagez notre histoire" }
        ],
        featuredBlocks: [
            "Devenir un <strong>bénévole</strong>",
            "Explorer les <strong>créations</strong>",
            "Faire un <strong>don</strong>",
            "Inspirer <strong>l'espoir</strong>"
        ],
        OurStoryTitle: "Notre histoire",
        OurStorySubtitle: "Orient Spirit Development, centre de formation professionnelle",
        OurStoryText: [
            "Dans notre parcours collectif chez Orient Spirit Development, nous sommes unis par une croyance commune en l'équité et l'opportunité pour chaque âme. Notre mission principale est de renforcer ceux qui ont été marginalisés ou qui font face à des adversités, en enrichissant leurs vies par le biais de la formation professionnelle et des compétences qui favorisent l'autonomie et encouragent l'acceptation sociale. Cette entreprise est enracinée dans la conviction que chaque individu, quel que soit son parcours ou ses défis, possède le potentiel de croissance et de contribution.",
            "Notre approche est ancrée dans la compréhension que tous les individus sont intrinsèquement capables et qu'avec les bons conseils, le soutien et des opportunités éducatives adaptées, ils peuvent libérer leur potentiel. Grâce à des efforts déterminés, nous visons à transformer des vies, plaidant pour un monde où chacun a la chance de mener une vie épanouissante et indépendante, célébré pour ses contributions uniques à la société.",
            "“Nous avons tous une place dans ce monde et nous remplissons tous une fonction, quelles que soient nos capacités ou nos incapacités.”"
        ],
        OurMissionTitle: "Notre mission",
        OurMissionText: "Débloquer le potentiel et inspirer le succès chez les personnes ayant des besoins spéciaux.",
        OurImpactTitle: "Notre impact",
        OurImpactItems: [
            "Éducation dévouée",
            "Soutien transformateur",
            "D'innombrables vies touchées"
        ],
        CTATitle: "Renforcez l'avenir. <br> Transformez des vies.",
        CTADonationText: "Faire un don",
        CTAVolunteerText: "Devenir bénévole",
        OurCausesTitle: "Notre engagement",
        CausesText: [
            {
                title: "Artisanat traditionnel",
                description: "En mettant l'accent sur la couture, la menuiserie et d'autres métiers ancestraux, notre centre enrichit l'éducation des personnes ayant des besoins spéciaux avec la maîtrise de compétences traditionnelles, offrant aux étudiants à la fois un lien avec le patrimoine culturel et des voies pratiques vers l'autosuffisance.",
                buttonText: "Faire un don"
            },
            {
                title: "Cultiver des compétences de vie essentielles",
                description: "Au-delà de la formation professionnelle, nous nous concentrons sur l'enrichissement des étudiants avec des compétences douces vitales telles que l'empathie, le travail d'équipe et la résilience. Ces compétences sont cruciales pour le développement personnel, favorisant un individu complet capable de s'épanouir dans divers aspects de la vie.",
                buttonText: "Faire un don"
            },
            {
                title: "Des doigts verts, des futurs lumineux",
                description: "Cette initiative introduit le jardinage et l'agriculture durables. En participant à l'agriculture respectueuse de l'environnement, les étudiants apprennent la responsabilité, l'importance de la durabilité et la joie de cultiver des aliments qui soutiennent à la fois le centre et leurs communautés.",
                buttonText: "Faire un don"
            }
        ],
        GetInTouch: "Entrez en contact",
        Subtitle: "<strong>Centre de formation professionnelle</strong>",
        ContactInformation: "Coordonnées de contact",
        GetDirection: "Obtenir l'itinéraire",
        quick_links: "Liens rapides",
        home2: "Accueil",
        story: "Notre histoire",
        engagement: "Notre engagement",
        contactinfo: "Informations de contact",
        getdirection: "Obtenir l'itinéraire",
    },
    ar: {
        Home: "الصفحة الرئيسية",
        About: "من نحن",
        Causes: "التزاماتنا",
        Contact: "تواصل معنا",
        Donate: "تبرع",
        WelcomeTitle: "مرحباً بكم في مركز روح الشرق",
        slideCaptions: [
            { title: "عمل مخلص", description: "تمكين التغيير" },
            { title: "النمو معًا", description: "ادعمنا" },
            { title: "نشر الأمل", description: "شارك قصتنا" }
        ],
        featuredBlocks: [
            "كن <strong>متطوعًا</strong>",
            "استكشف <strong>الإبداعات</strong>",
            "قدم <strong>تبرعًا</strong>",
            "إلهام <strong>الأمل</strong>"
        ],
        OurStoryTitle: "قصتنا",
        OurStorySubtitle: "مركز روح الشرق، مركز التدريب المهني",
        OurStoryText: [
            "في رحلتنا الجماعية في مركز تطوير روح الشرق، نجمع بين إيمان مشترك بالمساواة والفرص لكل نفس. مهمتنا الأساسية هي تقوية أولئك الذين تم تهميشهم أو يواجهون صعوبات، إثراء حياتهم من خلال التدريب المهني والمهارات التي تعزز الاعتماد على النفس وتكفل القبول الاجتماعي. هذه المساعي متجذرة في القناعة بأن كل فرد، بغض النظر عن خلفيته أو تحدياته، يحمل الإمكانية للنمو والمساهمة.",
            "منهجنا متأصل في الفهم بأن جميع الأفراد قادرون بطبيعتهم، ومع الإرشاد الصحيح، الدعم، وفرص التعليم المصممة خصيصًا لهم، يمكنهم فتح إمكانياتهم. من خلال جهود مخلصة، نهدف إلى تحويل الحياة، مدافعين عن عالم يحظى فيه الجميع بالفرصة لقيادة حياة مُرضية ومستقلة، يُحتفى بهم لمساهماتهم الفريدة في المجتمع.",
            "“لكل منا مكان في هذا العالم ولكل منا وظيفة يؤديها، بغض النظر عن قدراتنا أو إعاقاتنا.”"
        ],
        OurMissionTitle: "مهمتنا",
        OurMissionText: "فتح الإمكانيات وإلهام النجاح في الأفراد ذوي الاحتياجات الخاصة.",
        OurImpactTitle: "تأثيرنا",
        OurImpactItems: [
            "تعليم مخلص",
            "دعم محوري",
            "كثير من الأشخاص في المركز تلقوا الرعاية"
        ],
        CTATitle: "تعزيز المستقبل. <br> تحويل الحياة.",
        CTADonationText: "قم بالتبرع",
        CTAVolunteerText: "انضم إلينا",
        OurCausesTitle: "التزاماتنا",
        CausesText: [
            {
                title: "الحرف التقليدية",
                description: "من خلال التركيز على الخياطة والنجارة وغيرها من الحرف القديمة، يقوم مركزنا بإثراء تعليم الأشخاص ذوي الاحتياجات الخاصة من خلال إتقان المهارات التقليدية، مما يوفر للطلاب ارتباطًا بالتراث الثقافي ومسارات عملية لتحقيق الاكتفاء الذاتي.",
                buttonText: "تبرع الآن"
            },
            {
                title: "تنمية المهارات الحياتية الأساسية",
                description: "إلى جانب التدريب المهني، نحن نركز على إثراء الطلاب بالمهارات الشخصية الحيوية مثل التعاطف والعمل الجماعي والمرونة. هذه المهارات ضرورية للتنمية الشخصية، وتعزيز فرد متكامل قادر على الازدهار في مختلف جوانب الحياة.",
                buttonText: "تبرع الآن"
            },
            {
                title: "الأصابع الخضراء، مستقبل مشرق",
                description: "تقدم هذه المبادرة البستنة والزراعة المستدامة. ومن خلال المشاركة في الزراعة الصديقة للبيئة، يتعلم الطلاب المسؤولية وأهمية الاستدامة ومتعة زراعة الأغذية التي تدعم المركز ومجتمعاتهم.",
                buttonText: "تبرع الآن"
            }
        ],
        GetInTouch: "تواصل معنا",
        Subtitle: "<strong>التدريب المهني لذوي الاحتياجات الخاصة</strong>",
        ContactInformation: "معلومات الاتصال",
        GetDirection: "احصل على الاتجاه",
        quick_links: "الروابط",
        home2: "الصفحة الرئيسية",
        story: "قصتنا",
        engagement: "التزاماتنا",
        contactinfo: "معلومات الاتصال",
        getdirection: "احصل على الاتجاه"
    }    
};

const languageSelector = document.querySelector("#languageSelect");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    // Update navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        const id = link.id;
        if (translations[language][id]) {
            link.textContent = translations[language][id];
        }
    });

    // Update slide captions
    const slideCaptions = translations[language].slideCaptions;
    document.querySelectorAll(".carousel-item").forEach((item, index) => {
        const captionTitle = item.querySelector("h1");
        const captionDescription = item.querySelector("p");
        if (slideCaptions[index]) {
            captionTitle.innerText = slideCaptions[index].title;
            captionDescription.innerText = slideCaptions[index].description;
        }
    });

    // Update welcome title
    document.querySelector(".section-padding h2").innerHTML = translations[language].WelcomeTitle;

    // Update featured blocks texts
    const featuredTexts = translations[language].featuredBlocks;
    document.querySelectorAll(".featured-block-text").forEach((block, index) => {
        block.innerHTML = featuredTexts[index];
    });

    // Update "Our Story" section
    document.querySelector(".custom-text-box h2").innerText = translations[language].OurStoryTitle;
    document.querySelector(".custom-text-box h5").innerText = translations[language].OurStorySubtitle;
    const storyParagraphs = document.querySelectorAll(".custom-text-box > p.mb-0");
    translations[language].OurStoryText.forEach((part, index) => {
        storyParagraphs[index].innerHTML = part;
    });

    // Update "Our Mission" section
    const missionSection = document.querySelectorAll(".custom-text-box h5.mb-3")[1]; // Assuming the second h5 element in .custom-text-box
    missionSection.innerText = translations[language].OurMissionTitle;
    missionSection.nextElementSibling.innerText = translations[language].OurMissionText;

    // Update for "Our Impact" section
    const ourImpactSection = document.getElementById('ourImpactSection');
    const ourImpactTitleElement = ourImpactSection.querySelector("h5.mb-3");
    ourImpactTitleElement.innerText = translations[language].OurImpactTitle;
    
    const ourImpactList = ourImpactSection.querySelectorAll(".custom-list-item");
    ourImpactList.forEach((item, index) => {
        // Ensure there's a corresponding translation
        if (translations[language].OurImpactItems[index]) {
            // Update only the text, keeping the icons intact
            item.innerHTML = '<i class="bi-check custom-text-box-icon me-2"></i>' + translations[language].OurImpactItems[index];
        }
    });
    // Update CTA section
    const ctaTitleElement = document.querySelector("#cta h2");
    ctaTitleElement.innerHTML = translations[language].CTATitle;
    
    const ctaDonationLink = document.querySelector("#cta a:nth-of-type(1)"); // First link in CTA section
    ctaDonationLink.innerText = translations[language].CTADonationText;

    const ctaVolunteerLink = document.querySelector("#cta .custom-btn"); // Button with custom-btn class in CTA section
    ctaVolunteerLink.innerText = translations[language].CTAVolunteerText;

    // Update "Our Causes" section
    document.querySelector("#section_3 h2").innerText = translations[language].OurCausesTitle;

    document.querySelectorAll("#section_3 .custom-block-wrap").forEach((block, index) => {
        const cause = translations[language].CausesText[index];
        if (cause) {
            block.querySelector("h5.mb-3").innerText = cause.title;
            block.querySelector("p").innerText = cause.description;
            block.querySelector("a.custom-btn").innerText = cause.buttonText;
        }
    });

    // Update "Contact" section
    document.querySelector("#section_6 h2").innerText = translations[language].GetInTouch;
    document.getElementById("subtitle").innerHTML = translations[language].Subtitle;
    document.querySelectorAll("#section_6 .contact-info h5.mb-3")[0].innerText = translations[language].ContactInformation;
    document.querySelector("#section_6 .custom-btn").innerText = translations[language].GetDirection;

    document.getElementById("quick_links").innerText = translations[language].quick_links;
    document.getElementById("home2").innerText = translations[language].home2;
    document.getElementById("story").innerText = translations[language].story;
    document.getElementById("engagement").innerText = translations[language].engagement;
    document.getElementById("contactinfo").innerText = translations[language].contactinfo;
    document.getElementById("getdirection").innerText = translations[language].getdirection;
};

// Optionally, set a default language on page load
window.addEventListener("DOMContentLoaded", () => {
    setLanguage(languageSelector.value);
});