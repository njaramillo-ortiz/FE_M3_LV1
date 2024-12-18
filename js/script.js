const doctores = [
    {
        name: "Dr. Juan Perez",
        area: "Cirugía",
        description: "El Dr. Juan Pérez cuenta con más de 20 años de experiencia en cardiología.",
        image: "img/doctor1.webp",
        yearsExp: 3,
        schedule: 
        {
            startTime: "10:00",
            endTime: "12:00"
        },
        contact:
        {
            email: "jperez@hbv.cl",
            phone: "999999999"
        }
    },
    {
        name: "Dra. Maria Lopez",
        area: "Oftalmología",
        description: "La Dra. María López es reconocida por su trabajo en consultas generales.",
        image: "img/doctora2.webp",
        yearsExp: 4,
        schedule: 
        {
            startTime: "08:30",
            endTime: "17:30"
        },
        contact:
        {
            email: "mlopez@hbv.cl",
            phone: "988888888"
        }
    },
    {
        name: "Dr. Carlos Martinez",
        area: "Psicología",
        description: "El Dr. Carlos Martínez se especializa en atención hospitalaria.",
        image: "img/doctor3.webp",
        yearsExp: 1,
        schedule: 
        {
            startTime: "09:45",
            endTime: "10:15"
        },
        contact:
        {
            email: "cmartinez@hbv.cl",
            phone: "977777777"
        }
    },
    {
        name: "Dra. Elena Garcia",
        area: "Kinesiología",
        description: "Habitaciones confortables para tu recuperación.",
        image: "img/doctora4.webp",
        yearsExp: 5,
        schedule: 
        {
            startTime: "11:11",
            endTime: "20:20"
        },
        contact:
        {
            email: "egarcia@hbv.cl",
            phone: "966666666"
        }
    }
]

const servicios = [
    {
        name: "Urgencias",
        description: "Contamos con personal especializado las 24 horas del día, preparados para atender cualquier tipo de emergencia médica.",
        image: "img/home/urgencia.jpg"
    },
    {
        name: "Especialidades",
        description: "Cubrimos más de 30 especialidades, desempeñadas por profesionales en constante perfeccionamiento.",
        image: "img/home/especialidades.jpg"
    },
    {
        name: "Laboratorio",
        description: "Proveemos servicio de medicamoentos, toma de muestras biológicas y una gran variedad de exámenes.",
        image: "img/home/medicamentos.jpg"
    }
]

class DoctorArray
{
    constructor(content = null)
    {
        this.content = [];
        if(content != null)
            this.content.push(content);
    }

    AddDoctor(doctor)
    {
        this.content.push(doctor);
    }

    RemoveDoctor(name)
    {
        let removeIndex = this.content.findIndex(doctor => doctor.name === name);
        if(removeIndex >= 0)
        {
            this.content.splice(removeIndex, 1);
        }
    }

    SetDoctors(newDoctors)
    {
        this.content = newDoctors;
    }

    FindDoctor(name)
    {
        return this.content.find(doctor => doctor.name === name);
    }

    Print()
    {
        console.log(JSON.stringify(this.content));
    }
}

class ReserveStack
{
    constructor(content = null)
    {
        this.content = [];
        if(content != null)
            this.content.push(content);
    }

    AddReserve(reserve)
    {
        this.content.push(reserve);
    }

    GetLatest()
    {
        if(this.content.length > 0)
            return this.content.at(-1)
        else return null;
    }

    GetNext()
    {
        if(this.content.length > 0)
            return this.content.at(0);
        else return null;
    }

    Print()
    {
        console.log(JSON.stringify(this.content));
    }
}

class PatientQueue
{
    constructor(content = null)
    {
        this.content = [];
        if(content != null)
            this.content.push(content);
    }

    EnqueuePatient(patient)
    {
        patient.order = this.content.length;
        this.content.push(patient);
    }

    DequeuePatient()
    {
        if(this.content.length > 0)
        {
            this.content.splice(0, 1);
        }
    }

    Print()
    {
        console.log(JSON.stringify(this.content));
    }
}

var reserveStack = new ReserveStack();
var patientQueue = new PatientQueue();
var doctorArray = new DoctorArray();
doctorArray.SetDoctors(doctores);

function log(message)
{
    console.log(message);
}

function reservePrompt()
{
    let name = prompt("Ingrese su nombre completo");
    if(name == null) return;

    console.log(`Nombre: ${name}`);

    let validatedEmail = false;
    let email = "";

    while(!validatedEmail)
    {
        email = prompt("Ingrese su correo electrónico");
        if(email == null) return;

        let emailValidation = /^\S+@\S+\.\S+$/;
        validatedEmail = emailValidation.test(email) && typeof(email) === "string" && email.includes("@");

        if(validatedEmail)
            console.log(`Correo: ${email}`);
        else
            alert("Correo no válido!");
    }

    let validatedPhone = false;
    let phone = "";

    while(!validatedPhone)
    {
        phone = prompt("Ingrese su numero de teléfono");
        if(phone == null) return;

        let phoneValidation = /^(\+56)?9[0-9]{8}$/;
        validatedPhone = phoneValidation.test(phone) && typeof(phone) === "string";

        if(validatedPhone)
            console.log(`Teléfono: ${phone}`);
        else
            alert("Numero de teléfono no válido!");
    }

    let response = confirm(
        `Sus datos son: \n
        Nombre: ${name} \n
        Correo: ${email} \n
        Teléfono: ${phone} \n
        ¿Es correcto?`);

    if(response)
    {
        alert("Reserva realizada!");
        let newReserve = {}
        newReserve.name = name;
        newReserve.email = email;
        newReserve.phone = phone;

        reserveStack.AddReserve(newReserve);
        reserveStack.Print();
    }
}

function filterDoctorsByYears(years)
{
    try
    {
        let divListaDoctores = document.getElementById("listaDoctores");
        divListaDoctores.textContent = "";
        doctores.forEach(d => 
        {
            if(d.yearsExp >= years)
            {
                let divDoctor = document.createElement("div");
                divDoctor.className = "team-section__card";
                divDoctor.innerHTML = doctorCard(d);
                divListaDoctores.appendChild(divDoctor);
            }
            
        });
    }
    catch
    {
        debugger
        console.log(`invalid value for years: ${years}`);
    }
}

function doctorCard(doctor)
{
    let doctorYears = `${doctor.yearsExp} ${doctor.yearsExp == 1 ? "año" : "años"} de experiencia`

    let doctorHTML = `
    <img src="${doctor.image}" alt="${doctor.name}" class="team-section__card-image">
    <div class="team-section__card-body">
        <h3 class="team-section__card-title">${doctor.name}</h3>
        <p class="team-section__card-specialty">${doctorYears}</p>
        <p class="team-section__card-specialty">${doctor.area}</p>
        <p class="team-section__card-description">${doctor.description}</p>
    </div>`;
    
    return doctorHTML;
}

function showServices()
{
    let divListaServicios = document.getElementById("listaServicios");
    divListaServicios.textContent = "";
    servicios.forEach(s => 
    {
        let divServicio = document.createElement("div");
        divServicio.className = "services-section__card";
        divServicio.innerHTML = serviceCard(s);
        divListaServicios.appendChild(divServicio);
    });
}

function serviceCard(service)
{
    let serviceHTML = `
    <img src="${service.image}" class="services-section__card-image">
    <div class="services-section__card-body">
        <h3 class="services-section__card-title">${service.name}</h3>
        <p class="services-section__card-description">
            ${service.description}
        </p>
    </div>
    `;

    return serviceHTML;
}

function clone(original)
{
    let newObject = structuredClone(original);
    newObject[0].name = "MODIFICADO";
    newObject[0].description = "MODIFICADO"
    newObject[0].area = "MODIFICADO"

    console.log(`Original: ${JSON.stringify(original)}`);
    console.log(`Modificado: ${JSON.stringify(newObject)}`);
}

function merge(object1, object2)
{
    let concat = [... object1, ...object2]
    console.log(`Concatenado: ${JSON.stringify(concat)}`);
}

function parse(target)
{
    console.log("Recorrido: ");
    target.forEach(item => 
    {
        console.log(item);
    });

    console.log(`Stringify: ${JSON.stringify(target)}`);
}

function findDoctor(targetName)
{
    targetName = targetName.toLowerCase();
    console.log(`Buscando: ${targetName}`)
    doctorArray.content.forEach(doctor => 
    {
        let doctorName = doctor.name.toLowerCase();
        if(doctorName.includes(targetName))
        {
            console.log(`Encontrado: ${JSON.stringify(doctor)}`)
            return doctor;
        }
    });
}

function sortDoctorsByExperience()
{
    let sortedDoctors = doctorArray.content;

    for (var i = 0; i < sortedDoctors.length; i++)
    {
        for (var j = 0; j < (sortedDoctors.length - i - 1); j++)
        {
            if (sortedDoctors[j].yearsExp > sortedDoctors[j + 1].yearsExp)
            {
                var temp = sortedDoctors[j]
                sortedDoctors[j] = sortedDoctors[j + 1]
                sortedDoctors[j + 1] = temp
            }
        }
    }

    doctorArray.SetDoctors(sortedDoctors);
    doctorArray.Print();
}