import React from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row'; 
import { Album } from './Album';
import { PageAlbum } from './PageAlbum';



export class Catalogue extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { pageAlbum:false, albumClicke: -1, paroles: null }
    }

    handleAffichageCatalogue(){
        this.setState({pageAlbum: false});
        this.props.afficheAccueil(true);
    }

    render() { 
        if (this.state.pageAlbum){
            return <PageAlbum back={()=>this.handleAffichageCatalogue()} album={tabAlbums[this.state.albumClicke]}/>
        } else {
            return ( 
                <Row className='no-gutters'>
                        {tabAlbums.map((element,i) => ( element.artist.toLowerCase().includes(this.props.recherche.toLowerCase()) || element.title.toLowerCase().includes(this.props.recherche.toLowerCase())) &&
                            <Album  key={"album" + i} 
                                    src={element.src} 
                                    title={element.title} 
                                    artist={element.artist} 
                                    alt={element.alt} 
                                    pageAlbum={() => this.setState({pageAlbum: true, albumClicke:i})}
                                    onClick={(e)=>this.props.onClick(e)}
                                    >
                            </Album> )}
                </Row>
            );
        }
    }
}




var tabAlbums = [ 
    { 
        src : require("../img/2Freres_Nous_autres.jpg"), 
        alt: "2Freres",
        title: 'Nous autres', 
        artist: "2Freres",
        releaseYear: '2015',
        chansons: [{
            nom: "Maudite promesse",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>J'm'étais promis d'me battre et d'pas nous abandonner</p> 
                            <p>Mais depuis quelqu' temps j'en arrache et j'me sens les bras tomber</p>
                        </Col> 
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Quand j'rentre tout seul chez nous le soir, sans l'réconfort de ma moitié</p>
                            <p>P'is qu'y reste plus rien dans l'armoire, que des miettes de cœur brisé</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>J'm'étais permis de croire que tout redeviendrait</p>
                            <p>Comme dans nos belles années de gloire, quand tout l'monde nous enviait</p>
                        </Col>
                    </Row >
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>J'me nourrissais de t'entendre rire, et d't'aimer j'm'en abreuvais</p>
                            
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Mais c't'un rêve qui veux plus m'sourire, p'is j'ai pas l'goût de voir l'après</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>C'est une promesse qui m'garde debout contre le vent</p>
                            
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Une bataille de chaque jour, de chaque instant</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Maudite promesse, j'sais bien qu'c'est elle qui t'as fait fuir</p>
                            <p>P'is moi j'attends sans le meilleur et pour le pire</p>
                            <p>J'm'étais…</p>
                        </Col>
                    </Row>
                    </>
        },
        {
            nom: "Nous autres",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>Y a rien d'plus important qu'l'amour qui nous rassembl</p> 
                            <p>Rien qui traverse le temps si bin qu'la vie ensemble</p>

                        </Col> 
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Les tristesses, les chagrins, on l'sait qu'ça passera</p>
                            <p>En famille, entre amis depuis toujours, c'est comme ça</p>
                            
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Wô oh oh, oh oh, wô oh oh</p>
                        
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Wô oh oh, oh oh, wô oh oh</p>
                            
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Entre l'Abitibi pis le Lac-Saint-Jean</p>
                            <p>Y a un p'tit village où on en a vécu tant</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Des feux dans l'pit de sable pis toutes les niaiseries au p'tit parc</p>
                            <p>Quand on y r'pense, c'était vraiment pas plate</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Là on n'est plus des enfants, oh non</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>On n'a pas perdu d'temps pis on est devenus parents</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Depuis qu'ces p'tites âmes sont arrivées ici, on s'entend</p>
                            <p>Qu'on partage encore plus de beaux moments</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Y a rien d'plus important qu'l'amour qui nous…</p>
                        </Col>
                    </Row>
                    </>
        },
        {
            nom: "33 tours",
        },
        {
            nom: "Dans not salon",
        },
        {
            nom: "Qu'est-ce que tu dirais",
        },
        {
            nom: "Road Trip",
        },
        {
            nom: "M'aimerais-tu pareil?",
        },
        {
            nom: "À la vie, à la mort",
        },
        {
            nom: "Casseroles et clairons",
        },
        {
            nom: "Pépé",
        },
        {
            nom: "Vampire",
        },
        {
            nom: "Le démon du midi",
        },
        {
            nom: "Bonus (De rien)",
        }
    ]
    }, 
    { 
        src : require("../img/Alex Nevsky_Himalaya_mon_amour.jpg"), 
        alt: "Nevsky Alex",
        title: 'Himalaya mon amour', 
        artist: "Nevsky Alex",
        releaseYear: '2013',
        chansons: [{
            nom: "Himalaya mon amour",
        },
        {
            nom: "Mieux vaut vivre pauvre",
        },
        {
            nom: "Les Coloriés",
        },
        {
            nom: "On leur a fait croire",
        },
        {
            nom: "La bête lumineuse",
        },
        {
            nom: "J'aurai des mains",
        },
        {
            nom: "Si tu restes",
        },
        {
            nom: "Tuer le désir",
        },
        {
            nom: "Katharina",
        },
        {
            nom: "Je te quitterais",
        },
        {
            nom: "Loin",
        },
        {
            nom: "Koh Tao",
        }
    ]
    }, 
    { 
        src : require("../img/Karim Ouellet_Fox.jpg"), 
        alt: " Karim Ouellet", 
        title: "Fox", 
        artist: "Karim Ouellet",
        releaseYear: '2012',
        chansons: [{
            nom: "Fox",
        },
        {
            nom: "Foudre",
        },
        {
            nom: "Le lapin blanc",
        },
        {
            nom: "Marie-Jo ",
        },
        {
            nom: "Cyclone",
        },
        {
            nom: "L'amour",
        },
        {
            nom: "La moindre des choses",
        },
        {
            nom: "Les brumes",
        },
        {
            nom: "Décembre",
        },
        {
            nom: "La fin",
        }
    ]
    }, 
    { 
        src : require("../img/Klo Pelgag_Alchimie_des_monstres.jpg"), 
        alt: "Alchimie", 
        title: 'Alchimie des monstres', 
        artist: "Klo Pelgag",
        releaseYear: '2013',
        chansons: [{
            nom: "Le dermatologue",
        },
        {
            nom: "La fièvre des fleurs",
        },
        {
            nom: "Les corbeaux",
        },
        {
            nom: "Comme les rames",
        },
        {
            nom: "Tunnel",
        },
        {
            nom: "Le silence épouvantail",
        },
        {
            nom: "Le soleil incontinent",
        },
        {
            nom: "Rayon X",
        },
        {
            nom: "Nicaragua",
        },
        {
            nom: "Taxidermie",
        },
        {
            nom: "Les mariages d'oiseaux",
        },
        {
            nom: "Le tronc",
        }
    ]
    }, 
    { 
        src : require("../img/Les cowboys fringants_Les_antipodes.jpg"), 
        alt: "Cowboys fringants", 
        title: 'Les antipodes', 
        artist: "Cowboys fringants",
        releaseYear: '2019',
        chansons: [{
            nom: "L'Amérique pleure",
        },
        {
            nom: "Suzie Prudhomme",
        },
        {
            nom: "Ici-bas",
        },
        {
            nom: "Saint-Profond",
        },
        {
            nom: "MononcAndré",
        },
        {
            nom: "La traversée (de l'Atlantique en 1...",
        },
        {
            nom: "D'une tristesse",
        },
        {
            nom: "Johnny Pou",
        },
        {
            nom: "Sur mon épaule",
        }
        ]
    }, 
    { 
        src : require("../img/Safia Nolin_Limoilou.jpg"), 
        alt: "Limoilou", 
        title: 'Limoilou', 
        artist: 'Safia Nolin',
        releaseYear: '2015',
        chansons: [{
            nom: "Les excuses",
        },
        {
            nom: "La laideur",
        },
        {
            nom: "Technicolor",
        },
        {
            nom: "Aujourd'hui, demain",
        },
        {
            nom: "Ce matin",
        },
        {
            nom: "Les marées",
        },
        {
            nom: "Igloo",
        },
        {
            nom: "Valses à l'envers",
        },
        {
            nom: "Valser è l'envers B",
        },
        {
            nom: "Si seulement",
        },
        {
            nom: "Noel partout",
        },
        {
            nom: "Acide",
        }
        ]
    }, 
]