export const carouselPhotos = [
    '../../public/photos/culture_show/carousel_10.jpg',
    '../../public/photos/culture_show/carousel_1.jpg',
    '../../public/photos/culture_show/carousel_2.jpg',
    '../../public/photos/culture_show/carousel_3.jpg',
    '../../public/photos/culture_show/carousel_4.jpg',
    '../../public/photos/culture_show/carousel_5.jpg',
    '../../public/photos/culture_show/carousel_6.jpg',
    '../../public/photos/culture_show/carousel_7.jpg',
    '../../public/photos/culture_show/carousel_8.jpg',
    '../../public/photos/culture_show/carousel_9.jpg',
    '../../public/photos/culture_show/carousel_10.jpg',
    '../../public/photos/culture_show/carousel_1.jpg'
]

export const emToPx = (em, element = document.documentElement) => {
    return em * parseFloat(getComputedStyle(element).fontSize);
}