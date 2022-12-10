
export  const services = [
     'Car Mechanic',
     'Cleaner',
     'Carpenter',
     'Painter',
     'Plumber',
     'Tailor',
     'Welder',
     'Bricklayer',
     'Hair Stylist',
     'Generator Mechanic',
     'Electrician', 
     'Gardener'
]
export const wordRandomizer = () => {
     return services[Math.floor(Math.random()* services.length)];
}