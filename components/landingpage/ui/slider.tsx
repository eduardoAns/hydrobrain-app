
import TestimonialImage from '../../../public/assets/testimonial.jpg'
import Perfil_1 from '../../../public/assets/eduardo_perfil.jpeg'
import Perfil_2 from '../../../public/assets/kenny_perfil.jpeg'
import Perfil_3 from '../../../public/assets/johan_perfil.jpeg'
import Image from 'next/image'


export default function Slider() {
  return (
    <div className="max-w-2xl mx-auto mb-40 mt-20 md:mb-0 md:mt-0 xl:h-80 2xl:h-96">
        <div id="default-carousel" className="relative" data-carousel="static">
            <div className="overflow-hidden h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                <div className="hidden duration-700 ease-in-out" data-carousel-item data-aos="zoom-y-out">
                    <div  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" > 
                        <div className="max-w-3xl mx-auto mt-20" >
                            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                                {/* Testimonial */}
                                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                        <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                                        </svg>
                                        <Image className="relative rounded-full" src={Perfil_2} width={96} height={96} alt="Testimonial 01" />
                                    </div>
                                    <blockquote className="text-xl font-medium mb-4">
                                    Ingeniería en Minas / Administración y gestión estratégica, Planificación, Implementador SGI Trinormas ISO.
                                    </blockquote>
                                    <cite className="block font-bold text-lg not-italic mb-1">Kenny Lincoln Bugueño Sotelo</cite>
                                    <div className="text-gray-600">
                                        <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item data-aos="zoom-y-out">
                    <div  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"  >
                        <div className="max-w-3xl mx-auto mt-20" >
                            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                                {/* Testimonial */}
                                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                        <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                                        </svg>
                                        <Image className="relative rounded-full" src={Perfil_1} width={96} height={96} alt="Testimonial 02" />
                                    </div>
                                    <blockquote className="text-xl font-medium mb-4">
                                    Técnico en programación / Ingeniería de software, Desarrollo web, Analista base de datos y Escalabilidad de servicio Ti.
                                    </blockquote>
                                    <cite className="block font-bold text-lg not-italic mb-1">Eduardo Enrique Ansa Calcina</cite>
                                    <div className="text-gray-600">
                                        <span>Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item data-aos="zoom-y-out">
                    <div className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" >
                        <div className="max-w-3xl mx-auto mt-20" >
                            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                                {/* Testimonial */}
                                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                        <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                                        </svg>
                                        <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 03" />
                                    </div>
                                    <blockquote className="text-xl font-medium mb-4">
                                    Ingeniería eléctrica / Instrumentación, Calibración, Automatización, Instalación y mantención de equipos.
                                    </blockquote>
                                    <cite className="block font-bold text-lg not-italic mb-1">Nicolas Mauricio Olave Choque</cite>
                                    <div className="text-gray-600">
                                        <span>Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item data-aos="zoom-y-out">
                    <div className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" >
                        <div className="max-w-3xl mx-auto mt-20" >
                            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                                {/* Testimonial */}
                                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                        <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                                        </svg>
                                        <Image className="relative rounded-full" src={Perfil_3} width={96} height={96} alt="Testimonial 04" />
                                    </div>
                                    <blockquote className="text-xl font-medium mb-4">
                                    Estudiante de Ingeniería civil industrial / Data Analytics, Evaluación de proyectos, Control de operaciones.
                                    </blockquote>
                                    <cite className="block font-bold text-lg not-italic mb-1">Johan Josue Robles Nilo</cite>
                                    <div className="text-gray-600">
                                        <span>Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Linkedin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="3"></button>
            </div>
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div>

        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js" async></script>
    </div>
  )
}
