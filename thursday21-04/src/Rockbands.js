import React from 'react'

function Rockbands() {
    const rockbands = [
        {
            name: "Amon Amarth",
            id: 1,
            img: "https://resources.tidal.com/images/4ea9e190/1821/409a/8e6a/e05965b09cd2/750x750.jpg",
            describe: "Amon Amarth, 1992 yılında İsveç'in Tumba şehrinde kurulmuş olan melodik death metal grubudur. Grup adını J. R. R. Tolkien'in Orta Dünya'sında bulunan Hüküm Dağı'nın Sindarin dilindeki adından almıştır. Grubun şarkı sözleri genellikle Viking'lerin mitolojisi ve tarihi ile ilgilidir."
        },
        {
            name: "Gojira",
            id: 2,
            img: "https://media.bantmag.com/wp-content/uploads/2021/05/gojira-web.jpg",
            describe: "Gojira, 1996'da kurulmuş bir Fransız progresif metal grubu. 2001 yılına kadar Godzilla olarak bilinen grup, vokalist-ritim gitarist Joe Duplantier ve onun baterist kardeşi Mario Duplantier, solo gitarist Christian Andreu ve bas gitarist Jean-Michel Labadie'den oluşmaktadır."
        },
        {
            name: "Iron Maiden",
            id: 3,
            img: "https://ar-files.s3.eu-central-1.amazonaws.com/s3fs-public/im.jpeg",
            describe: "Iron Maiden, 1975 yılında Londra'da kurulmuş bir İngiliz heavy metal grubudur. Grup basçı Steve Harris tarafından kurulmuştur."
        },
        {
            name: "Kurban",
            id: 4,
            img: "https://resources.tidal.com/images/4ea9e190/1821/409a/8e6a/e05965b09cd2/750x750.jpg",
            describe: "Kurban, 1997 yılında kurulan Türk rock grubu."
        },
        {
            name: "Disturbed",
            id: 5,
            img: "https://i1.imgiz.com/data/artist3/1436191657-disturbed.jpg",
            describe: "Disturbed, Amerikan hard rock grubu"
        },
        {
            name: "Pink Floyd",
            id: 6,
            img: "https://images-cdn.9gag.com/photo/avP1y9W_700b.jpg",
            describe: "Pink Floyd, 1965'te Londra'da kurulan İngiliz progresif/psikedelik rock müzik grubu. Felsefî şarkı sözleri, yenilikçi albüm kapakları, etkileyici-girift sahne şovları ile Pink Floyd, dünya çapında başarıya ulaşmıştır. "
        },
        {
            name: "The Strokes",
            id: 7,
            img: "https://cdn.britannica.com/77/205077-050-358F982F/The-Strokes-Nikolai-Fraiture-Fabrizio-Moretti-Albert-2006.jpg",
            describe: "The Strokes, Julian Casablancas, Nick Valensi, Albert Hammond Jr., Nikolai Fraiture ve Fabrizio Moretti'den oluşan New Yorklu Amerikan bağımsız rock grubudur. Ocak 2001'de ilk EP'leri olan The Modern Age'in yayınlanmasından sonra, grubu imzalamak için büyük plak şirketleri arasında bir teklif savaşı başladı."
        },
        {
            name: "Jonny Cash",
            id: 8,
            img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQebZOhZeiWDn2pesexRLT1Ii7RL5aSbH2rW9SW7SVYU3PrB_0wmiDh0BGEdMsP",
            describe: "Johnny Cash Amerikalı rock ve country müziğini önemli ölçüde etkilemiş bir gitarist, söz ve müzik yazarı ve June Carter Cash'in eşiydi. Derin ve özgün sesi, yük katarı diye de anılan Tennessee Üçlüsü adlı orkestrası, kendisine siyah giysili adam ün kazandıran kara giysileri ve tavırlarıyla ünlüydü."
        },
        {
            name: "The Doors",
            id: 9,
            img: "https://img-s2.onedio.com/id-5ff3031fdecabe222b987c97/rev-0/w-620/f-jpg/s-15bd8569e2f9034f0109509911e5939c3a32e3d4.jpg",
            describe: "The Doors 1965 yılında Los Angeles, Kaliforniya'da kurulmuş Amerikalı Rock grubu."
        }
    ]
    return (
        <>
            <div className='container'>
                <div className="row">
                    {rockbands.map((band) => (
                        <div className="col-4 mb-4 mt-4">
                            <div className='card'>
                                <img src={band.img} className="card-img-top" alt="..." height={"350px"}/>
                                <div className="card-body">
                                    <h5 className="card-title">{band.name}</h5>
                                    <p className="card-text">
                                        {band.describe}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Rockbands