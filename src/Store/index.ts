import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Movie } from "../Types/Movie"

const initialMoviesState: Array<Movie> = 


[
 
   
    {
        "id": 139,
        "apiId": 1064517,
        "title": "Fist of the Co",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//odpaGY2lG32NG4GL2PuGPt7UUTy.jpg",
        "rating": 8,
        "description": "A grooving man is",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            }
        ],
        "owned": true
    },
    {
        "id": 120,
        "apiId": 580489,
        "title": "Venom: Let There Be Carnage",
        "poster": "https://image.tmdb.org/t/p/original//rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "rating": 6.9,
        "description": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "genres": [
            {
                "id": 12,
                "name": "Adventure",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 119,
        "apiId": 800345,
        "title": "Carter",
        "poster": "https://image.tmdb.org/t/p/original//uzAh3Ub2YttCz13cnyB9PvhpmIL.jpg",
        "rating": 6.2,
        "description": "Carter, who awakens two months into a deadly pandemic originating from the DMZ that has already devastated US and North Korea. He who has no recollections of his past finds a mysterious device in his head, and a lethal bomb in his mouth. A voice in his ears gives him orders to avoid getting killed and he's thrown into a mysterious operation while the CIA and North Korean coup chase him close.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            }
        ],
        "owned": true
    },
    {
        "id": 111,
        "apiId": 797,
        "title": "Persona",
        "poster": "https://image.tmdb.org/t/p/original//bdXbfUir63TQHA5NTNcXPICZCW8.jpg",
        "rating": 8.2,
        "description": "A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer. The time they spend together only strengthens the crushing realization that one does not exist.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            }
        ],
        "owned": true
    },
    {
        "id": null,
        "apiId": 389,
        "title": "12 Angry Men",
        "poster": "https://image.tmdb.org/t/p/original//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "rating": 8.5,
        "description": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            }
        ],
        "owned": false
    },
    {
        "id": null,
        "apiId": 496243,
        "title": "Parasite",
        "poster": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "rating": 8.5,
        "description": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 35,
                "name": "Comedy",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            }
        ],
        "owned": false
    },
    {
        "id": 107,
        "apiId": 85743,
        "title": "Play",
        "poster": "https://image.tmdb.org/t/p/original//bJWi0taJmU9WyPdIUVhShxISCFA.jpg",
        "rating": 6.9,
        "description": "In central Gothenburg, Sweden, a group of boys, aged 12-14, robbed other children on about 40 occasions between 2006 and 2008. The thieves used an elaborate scheme called the 'little brother number' or 'brother trick', involving advanced role-play and gang rhetoric rather than physical violence.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": true
    },
    {
        "id": 105,
        "apiId": 647003,
        "title": "Alien Nights",
        "poster": "https://image.tmdb.org/t/p/original//rkwOj1Ex2EjgYkfkuXbjr9lRsxU.jpg",
        "rating": 7,
        "description": "Rio Branco, Acre, an Amazon city near the border with Peru and Bolivia, has been suffering the violent impacts of recent changes in trafficking routes, which have arrived with violence in the Brazilian Amazon. In this scenario, the lives of three young childhood friends intertwine and ultimately, they find themselves in a common tragedy.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": true
    },
    {
        "id": 103,
        "apiId": 679,
        "title": "Aliens",
        "poster": "https://image.tmdb.org/t/p/original//r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
        "rating": 7.9,
        "description": "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story—all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 102,
        "apiId": 601796,
        "title": "Alienoid",
        "poster": "https://image.tmdb.org/t/p/original//8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
        "rating": 7.2,
        "description": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
        "genres": [
            {
                "id": 12,
                "name": "Adventure",
                
            },
            {
                "id": 14,
                "name": "Fantasy",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 100,
        "apiId": 458220,
        "title": "Palmer",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg",
        "rating": 8,
        "description": "After 12 years in prison, former high school football star Eddie Palmer returns home to put his life back together—and forms an unlikely bond with Sam, an outcast boy from a troubled home. But Eddie's past threatens to ruin his new life and family.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            }
        ],
        "owned": true
    },
    {
        "id": 99,
        "apiId": 829503,
        "title": "Gigi & Nate",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//xP1GXV1gms9b5BpHZP7S8qs8FO.jpg",
        "rating": 8.1,
        "description": "A young man with a bright future suffers a near-fatal accident and recreates his new life with the help of an unlikely animal friend.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            }
        ],
        "owned": true
    },
    {
        "id": 98,
        "apiId": 512195,
        "title": "Red Notice",
        "poster": "https://image.tmdb.org/t/p/original//lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
        "rating": 6.8,
        "description": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 35,
                "name": "Comedy",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            },
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": true
    },
    {
        "id": 97,
        "apiId": 1008005,
        "title": "The Communion Girl",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//uYxrWr9o44yO0HvVfFFHGu01gfX.jpg",
        "rating": 6.2,
        "description": "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
        "genres": [
            {
                "id": 27,
                "name": "Horror",
                
            }
        ],
        "owned": true
    },
    {
        "id": 95,
        "apiId": 171160,
        "title": "The Butterfly's Dream",
        "poster": "https://image.tmdb.org/t/p/original//y3tvOh6QmyQDSth9EKKNzpdaZ0y.jpg",
        "rating": 7.2,
        "description": "In a small Turkish town, two young tuberculous poets try to survive while publishing their poems. As they both fall in love, their life would never be the same.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 36,
                "name": "History",
                
            }
        ],
        "owned": true
    },
    {
        "id": null,
        "apiId": 33799,
        "title": "Place Vendôme",
        "poster": "https://image.tmdb.org/t/p/original//hJpnnqT3Uo2NX2NgqMNemGoAEXm.jpg",
        "rating": 6.4,
        "description": "The story of a woman that remained distracted for a long time from her life, from the passions that made her feel alive. The importance of true love is compared with the material value of diamonds. Only one truly lasts forever. She's got to find the thing that values most for her, the thing that gives psychical stability and real happiness again to her life.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": false
    },
    
    
    {
        "id": 76,
        "apiId": 700391,
        "title": "65",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
        "rating": 6.3,
        "description": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
        "genres": [
            {
                "id": 12,
                "name": "Adventure",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 74,
        "apiId": 507250,
        "title": "Dead Shot",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//s0Qx9YL1JSpYKm1hu0Ovj0IJ1SN.jpg",
        "rating": 7,
        "description": "In the 1970s, a member of the IRA takes over an Active Service Unit in London after his wife is accidentally shot dead in Ireland. The unit's mission is to cause chaos and destruction, while his personal aim is to hunt down his wife’s killer — an SAS captain, who is also hunting him.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            }
        ],
        "owned": true
    },
    {
        "id": 72,
        "apiId": 552688,
        "title": "The Mother",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
        "rating": 6.8,
        "description": "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            }
        ],
        "owned": true
    },
    {
        "id": 71,
        "apiId": 436270,
        "title": "Black Adam",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "rating": 7.1,
        "description": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "genres": [
            {
                "id": 12,
                "name": "Adventure",
                
            },
            {
                "id": 14,
                "name": "Fantasy",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 70,
        "apiId": 840326,
        "title": "Sisu",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg",
        "rating": 7,
        "description": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 10752,
                "name": "War",
                
            }
        ],
        "owned": true
    },
    {
        "id": null,
        "apiId": 1111140,
        "title": "Two Sinners and a Mule",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//icL1zn5z1L5ULIpxkuOLjeUgURY.jpg",
        "rating": 5.8,
        "description": "Kicked out of a small Western town for sinful behavior, free-spirited Alice and Nora set out for Virginia City to pursue their dream of opening a restaurant. Out on the prairie, they come across an injured bounty hunter named Elden. Hoping to share in the reward, they nurse Elden back to health and help him stalk his prey, Grimes. But as Nora and Alice both develop feelings for Elden, no one notices that Grimes is now on their tail, and the hunters become the hunted…",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 37,
                "name": "Western",
                
            }
        ],
        "owned": false
    },
    {
        "id": 68,
        "apiId": 964980,
        "title": "Air",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
        "rating": 7.5,
        "description": "Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 36,
                "name": "History",
                
            }
        ],
        "owned": true
    },
    
    {
        "id": 65,
        "apiId": 804150,
        "title": "Cocaine Bear",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
        "rating": 6.3,
        "description": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        "genres": [
            {
                "id": 35,
                "name": "Comedy",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            },
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": true
    },
    {
        "id": 64,
        "apiId": 842675,
        "title": "The Wandering Earth II",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//pR858ihc6Ls9xohpdRJVjV787ml.jpg",
        "rating": 7.5,
        "description": "A prequel to The Wandering Earth.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 59,
        "apiId": 1104040,
        "title": "Gangs of Lagos",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//nGwFsB6EXUCr21wzPgtP5juZPSv.jpg",
        "rating": 6.2,
        "description": "A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
        "genres": [
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": true
    },
    {
        "id": 54,
        "apiId": 1033219,
        "title": "Attack on Titan",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//qNz4l8UgTkD8rlqiKZ556pCJ9iO.jpg",
        "rating": 6,
        "description": "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            }
        ],
        "owned": true
    },
    {
        "id": 22,
        "apiId": 677179,
        "title": "Creed III",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
        "rating": 7.3,
        "description": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            }
        ],
        "owned": true
    },
    {
        "id": 18,
        "apiId": 882569,
        "title": "Guy Ritchie's The Covenant",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
        "rating": 7.7,
        "description": "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            },
            {
                "id": 10752,
                "name": "War",
                
            }
        ],
        "owned": true
    },
    {
        "id": 15,
        "apiId": 727340,
        "title": "Hunt",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg",
        "rating": 6.9,
        "description": "After a high-ranking North Korean official requests asylum, KCIA Foreign Unit chief Park Pyong-ho and Domestic Unit chief Kim Jung-do are tasked with uncovering a North Korean spy, known as Donglim, who is deeply embedded within their agency. When the spy begins leaking top secret intel that could jeopardize national security, the two units are each assigned to investigate each other.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            }
        ],
        "owned": true
    },

    {
        "id": 66,
        "apiId": 649609,
        "title": "Renfield",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        "rating": 7.2,
        "description": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        "genres": [
            {
                "id": 14,
                "name": "Fantasy",
                
            },
            {
                "id": 27,
                "name": "Horror",
                
            },
            {
                "id": 35,
                "name": "Comedy",
                
            }
        ],
        "owned": true
    },
    {
        "id": null,
        "apiId": 1102776,
        "title": "AKA",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
        "rating": 7,
        "description": "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
        "genres": [
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 53,
                "name": "Thriller",
                
            },
            {
                "id": 80,
                "name": "Crime",
                
            }
        ],
        "owned": false
    }, 
    {
        "id": 146,
        "apiId": null,
        "title": "Moonlight",
        "poster": "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
        "rating": null,
        "description": "Ay Işığı, Barry Jenkins tarafından yönetilen ve senaryosu Jenkins tarafından Tarell Alvin McCraney'in In Moonlight Black Boys Look Blue kitabından uyarlanan 2016 Amerikan yapımı dram filmi.",
        "genres": [
            {
                "id": 18,
                "name": "Drama",
                
            },
            {
                "id": 10749,
                "name": "Romance",
                
            }
        ],
        "owned": true
    },
    {
        "id": 89,
        "apiId": 620705,
        "title": "Crater",
        "poster": "https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original//n8ZpMwYT02XjpQHpSxn1eJw5Zpz.jpg",
        "rating": 6.6,
        "description": "After the death of his father, a boy growing up on a lunar mining colony takes a trip to explore a legendary crater, along with his four best friends, prior to being permanently relocated to another planet.",
        "genres": [
            {
                "id": 12,
                "name": "Adventure",
                
            },
            {
                "id": 28,
                "name": "Action",
                
            },
            {
                "id": 878,
                "name": "Sci-Fi",
                
            },
            {
                "id": 10751,
                "name": "Family",
                
            }
        ],
        "owned": true
    },
     {
        "id": 87,
        "apiId": 51497,
        "title": "Fast Five",
        "poster": "https://image.tmdb.org/t/p/original//h0Xsy4aomjMO47RpoHv8lnfbkoE.jpg",
        "rating": 7.3,
        "description": "Former cop Brian O'Conner partners with ex-con Dom Toretto on the opposite side of the law. Since Brian and Mia Toretto broke Dom out of custody, they've blown across many borders to elude authorities. Now backed into a corner in Rio de Janeiro, they must pull one last job in order to gain their freedom.",
        "genres": [],
        "owned": true
    },
]
    
const initialPopularsState: Array<Movie> =   [
    {
      id: null,
      apiId: 447277,
      title: 'The Little Mermaid',
      poster: 'https://image.tmdb.org/t/p/original//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
      rating: 6,
      description:
        'The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.',
      owned: false,
      genres: [
        { id: 10751, name: 'Family' },
        { id: 10749, name: 'Romance' },
        { id: 14, name: 'Fantasy' },
        { id: 12, name: 'Adventure' },
      ],
    },
    {
      id: null,
      apiId: 605886,
      title: 'To Catch a Killer',
      poster: 'https://image.tmdb.org/t/p/original//mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg',
      rating: 7,
      description:
        "Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.",
      owned: false,
      genres: [
        { id: 9648, name: 'Mystery' },
        { id: 80, name: 'Crime' },
        { id: 53, name: 'Thriller' },
        { id: 28, name: 'Action' },
      ],
    },
    {
      id: null,
      apiId: 569094,
      title: 'Spider-Man: Across the Spider-Verse',
      poster: 'https://image.tmdb.org/t/p/original//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      rating: 8.6,
      description:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      owned: false,
      genres: [
        { id: 878, name: 'Sci-Fi' },
        { id: 28, name: 'Action' },
        { id: 16, name: 'Animation' },
        { id: 12, name: 'Adventure' },
      ],
    },
    {
      id: null,
      apiId: 1105803,
      title: 'Snag',
      poster: 'https://image.tmdb.org/t/p/original//nhj4Q39qMSk6X5Ly9j9Yqyjrg5A.jpg',
      rating: 6,
      description:
        "An Australian lone wolf's quiet existence is shattered when he learns that the woman he once loved and thought was dead is alive and held captive by ruthless gangsters. Now, to take on this dangerous criminal organization, he must seek out allies and storm into a world of violence to rescue the love of his life in this gritty, modern day violent fairytale.",
      owned: false,
      genres: [
        { id: 80, name: 'Crime' },
        { id: 53, name: 'Thriller' },
        { id: 28, name: 'Action' },
      ],
    },
    {
      id: null,
      apiId: 315162,
      title: 'Puss in Boots: The Last Wish',
      poster: 'https://image.tmdb.org/t/p/original//kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
      rating: 8.3,
      description:
        'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
      owned: false,
      genres: [
        { id: 10751, name: 'Family' },
        { id: 35, name: 'Comedy' },
        { id: 16, name: 'Animation' },
        { id: 14, name: 'Fantasy' },
        { id: 12, name: 'Adventure' },
      ],
    },
    {
      id: null,
      apiId: 420808,
      title: 'Peter Pan & Wendy',
      poster: 'https://image.tmdb.org/t/p/original//9NXAlFEE7WDssbXSMgdacsUD58Y.jpg',
      rating: 5.8,
      description:
        'Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.',
      owned: false,
      genres: [
        { id: 10751, name: 'Family' },
        { id: 28, name: 'Action' },
        { id: 14, name: 'Fantasy' },
        { id: 12, name: 'Adventure' },
      ],
    },
    {
      id: null,
      apiId: 934433,
      title: 'Scream VI',
      poster: 'https://image.tmdb.org/t/p/original//wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg',
      rating: 7.3,
      description:
        'Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.',
      owned: false,
      genres: [
        { id: 9648, name: 'Mystery' },
        { id: 53, name: 'Thriller' },
        { id: 27, name: 'Horror' },
      ],
    },
    {
      id: null,
      apiId: 493529,
      title: 'Dungeons & Dragons: Honor Among Thieves',
      poster: 'https://image.tmdb.org/t/p/original//A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg',
      rating: 7.5,
      description:
        'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
      owned: false,
      genres: [
        { id: 35, name: 'Comedy' },
        { id: 14, name: 'Fantasy' },
        { id: 12, name: 'Adventure' },
      ],
    },
    {
      id: null,
      apiId: 1107872,
      title: "Mother's Day",
      poster: 'https://image.tmdb.org/t/p/original//wws9Z90DdZ7D0n3gdzFSZ6cntJi.jpg',
      rating: 5.8,
      description:
        'Nina, a former NATO special operations agent living in hiding, has to use all her deadly skills to rescue her son who has been kidnapped by ruthless gangsters. Finding Max is a double opportunity for her. A chance to feel the adrenaline rush again, and an opportunity to get back into the life of the son she had to abandon years ago.',
      owned: false,
      genres: [
        { id: 53, name: 'Thriller' },
        { id: 28, name: 'Action' },
        { id: 18, name: 'Drama' },
      ],
    },
    {
      id: null,
      apiId: 1016121,
      title: 'Beautiful Disaster',
      poster: 'https://image.tmdb.org/t/p/original//bwdLflvCcOCRPqb1x13KPuYIzVx.jpg',
      rating: 6.1,
      description:
        'Bad-boy Travis is exactly what college freshman Abby needs and wants to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis. Intrigued by Abby’s resistance, Travis offers her a simple bet: if he loses his next fight, he must remain sex-free for a month. If he wins, Abby must live in his apartment for the same amount of time. Either way, Travis has no idea that Abby’s dark past is about to emerge, and he may have finally met his match.',
      owned: false,
      genres: [
        { id: 10749, name: 'Romance' },
        { id: 35, name: 'Comedy' },
        { id: 18, name: 'Drama' },
      ],
    },
    {
      id: null,
      apiId: 325358,
      title: 'Superfast!',
      poster: 'https://image.tmdb.org/t/p/original//iuIWl90qCpoxv6g775JB6Kg0m86.jpg',
      rating: 5,
      description:
        "Undercover cop Lucas White joins Vin Serento's LA gang of illegal street racers. They are fast and they are furious and they plan to double cross LA crime kingpin Juan Carlos de la Sol who hides his cash in a downtown Taco Bell. The gang's outrageous plan is as daring as it is ridiculous and will see them towing the whole restaurant, at crazy speeds.",
      owned: false,
      genres: [
        { id: 35, name: 'Comedy' },
        { id: 28, name: 'Action' },
      ],
    },

    {
      id: null,
      apiId: 977223,
      title: 'Polite Society',
      poster: 'https://image.tmdb.org/t/p/original//lv1WqAo2ulQy9aSOG7ikR44p8RR.jpg',
      rating: 6.8,
      description:
        'Martial artist-in-training Ria Khan believes she must save her older sister Lena from her impending marriage. After enlisting the help of her friends, Ria attempts to pull off the most ambitious of all wedding heists in the name of independence and sisterhood.',
      owned: false,
      genres: [
        { id: 35, name: 'Comedy' },
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
      ],
    },

  ]

  function hashCode(input:string) {
    var hash = 0;
    for (var i = 0; i < input.length; i++) {
      var char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }



const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    addMovie(state, action) {
        let arrayyy=[]
        for (let index = state.length-1; index >=0 ; index--) {
        arrayyy.push(state[index])
        }

        
    const testIndex = state.findIndex((m:Movie)=>m.title===action.payload.title)
    if(testIndex>=0){
        state[testIndex].owned=true
        state[testIndex].id=hashCode(action.payload.title)
    }
    else{

        state.push({...action.payload,id:hashCode(action.payload.title), owned:true})
    }
    },
    updateMovie(state, action) {
        const updatedMovieIndex = state.findIndex(
          (m) => m.id === action.payload.id
        )
        state[updatedMovieIndex] = action.payload
      },
      deleteMovie(state, action) {
        const deletedMovieIndex = state.findIndex(
          (m) => m.id === action.payload
        )
        state.splice(deletedMovieIndex,1)
        }
      },
  },
)

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: initialPopularsState,
    reducers: {
      addToAllMovies(state, action) {
       const popularIndex = state.findIndex((m)=>m.apiId===action.payload.apiId)
       state[popularIndex].owned=true
      },
      bringBackIfPopular(state, action) {
        const testedMovieIndex = state.findIndex((m)=>m.apiId===action.payload.apiId)
        
        if(testedMovieIndex>=0){
            state[testedMovieIndex].owned=false;
            state[testedMovieIndex].id=null;
        }
       },
       
    },
  })

export const moviesActions = moviesSlice.actions
export const popularMoviesActions = popularMoviesSlice.actions

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    popularMovies: popularMoviesSlice.reducer,
  },
})

export default store


