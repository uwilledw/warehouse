// console.log('is it working');

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]






let packageElem = document.getElementById('package')
function drawPackages(property) {
    // look at all the packages
    // target my HTML doc
    // put the packages into the HTML
    console.log('drawing packages')
    packages.forEach(p => {
        console.log(p, 'drawing packages')
        packageElem.innerHTML += `<p> to:${p.to} id: ${p.trackingNumber}</p>`

    });
}

function drawPack(info) {
    console.log('info')
    info.forEach(i => {
        packageElem.innerHTML += `<p> to:${i.to} id: ${i.trackingNumber}</p>`
    });
}

function filterFragile() {
    let fragile = packages.filter(f => f.isFragile == true)
    console.log(fragile, 'fragile');

    drawPack(fragile)

}

function filterHeavy() {
    let heavy = packages.filter(h => h.weight > 4)
    console.log(heavy, 'heavy')

    drawPack(heavy)
}







drawPackages()
filterFragile()
filterHeavy()