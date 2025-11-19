export const carouselPhotos = [
    '/photos/culture_show/carousel_10.jpg',
    '/photos/culture_show/carousel_1.jpg',
    '/photos/culture_show/carousel_2.jpg',
    '/photos/culture_show/carousel_3.jpg',
    '/photos/culture_show/carousel_4.jpg',
    '/photos/culture_show/carousel_5.jpg',
    '/photos/culture_show/carousel_6.jpg',
    '/photos/culture_show/carousel_7.jpg',
    '/photos/culture_show/carousel_8.jpg',
    '/photos/culture_show/carousel_9.jpg',
    '/photos/culture_show/carousel_10.jpg',
    '/photos/culture_show/carousel_1.jpg'
]

export const emToPx = (em, element = document.documentElement) => {
    return em * parseFloat(getComputedStyle(element).fontSize);
}