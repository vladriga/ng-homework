import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const locations = [
    {
        'img1': 'assets/images/r1.jpg',
        'img2': 'assets/images/r2s.jpg',
        'address': 'El Chaco 3200, Providencia',
        'description1': 'Breakfast included',
        'description2': 'Concierge services',
        'phone': 12345678,
        'weather': {
            'title': '',
            'icon': '',
            'weather': 20,
            'temperature': 26
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 215,
            'following': 784
        },
        'type': 'hotel'
    },
    {
        'img1': 'assets/images/res.jpg',
        'img2': 'assets/images/res2.jpg',
        'address': 'Calle Degollado S/N, Centro',
        'description1': 'Free parking',
        'description2': 'Free internet',
        'phone': 65498732,
        'weather': {
            'title': '',
            'icon': '',
            'weather': 8,
            'temperature': 15
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 856,
            'following': 633
        },
        'type': 'hotel'
    },
    {
        'img1': 'assets/images/fishing1s.jpg',
        'img2': 'assets/images/fishing2s.jpg',
        'address': 'Av Alcalde 10, Centro',
        'description1': 'ROOSTERFISH',
        'description2': 'AMBERJACK',
        'phone': 12578946,
        'weather': {
            'title': '',
            'icon': '',
            'weather': 20,
            'temperature': 23
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 245,
            'following': 657
        },
        'type': 'fishing'
    },
    {
        'img1': 'assets/images/fishing3s.jpg',
        'img2': 'assets/images/fishing4s.jpg',
        'address': 'Avenida de Las Americas 1500',
        'description1': 'MEAGRE',
        'description2': 'YELLOW FIN TUNA',
        'phone': 32569814,
        'weather': {
            'title': '',
            'icon': '',
            'weather': 12,
            'temperature': 16
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 985,
            'following': 240
        },
        'type': 'fishing'
    },
    {
        'img1': 'assets/images/tours1s.jpg',
        'img2': 'assets/images/tours2s.jpg',
        'address': 'Calzada Lazaro Cardenas #340',
        'description1': 'Agave plant',
        'description2': 'LAGO EXPRESS',
        'phone': 14725896,
        'weather': {
            'title': '',
            'icon': '',
            'weather': 8,
            'temperature': 16
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 354,
            'following': 654
        },
        'type': 'Tours'
    },
    {
        'img1': 'assets/images/tours3s.jpg',
        'img2': 'assets/images/tours4s.jpg',
        'address': 'David Alfaro Siqueiros N. 164 Colonia',
        'description1': 'zarpando hacia nuestro primer destino',
        'description2': 'la parte mas antigua',
        'phone': 36925817,
        'weather': {
            'title': '',
            'icon': '',
            'weather': 14,
            'temperature': 21
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 965,
            'following': 545
        },
        'type': 'Tours'
    },
    {
        'img1': 'assets/images/weather1s.jpg',
        'img2': 'assets/images/weather2s.jpg',
        'address': 'Calle Heroes 91 Col Centro',
        'description1': 'No hay nada como el espectáculo',
        'description2': ' practica snorkel en esta hermosa',
        'phone': 15926348,
        'weather': {
            'title': '',
            'icon': '',
            'water': 22,
            'temperature': 29
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 488,
            'following': 365
        },
        'type': 'Weather'
    },
    {
        'img1': 'assets/images/weather2s.jpg',
        'img2': 'assets/images/weather1s.jpg',
        'address': 'Blvd Francisco Medina Ascencio',
        'description1': 'considerado como  la Puerta de Entrada',
        'description2': 'a los Altos de Jalisco ',
        'phone': 14736985,
        'weather': {
            'title': '',
            'icon': '',
            'water': 11,
            'temperature': 18
        },
        'social_info': {
            'title': '',
            'img': '',
            'followers': 145,
            'following': 122
        },
        'type': 'Weather'
    }
];

export const locations$ = Observable.of(locations);
