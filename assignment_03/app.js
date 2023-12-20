let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]


   

    let list_show = document.getElementById('list_show');
    let filterDropdown = document.getElementById('filter');

    // Extract unique properties from the array of objects
    let properties = Array.from(new Set(arr.flatMap(obj => Object.keys(obj))));

    // Populate the dropdown with options based on properties
    filterDropdown.innerHTML = '<option value="">Select Property</option>' +
        properties.map(property => `<option value="${property}">${property}</option>`).join('');

    function renderList(filteredArr) {
        list_show.innerHTML = '';

        filteredArr.forEach((object_det) => {
            const { brand, model, price, camera, ram, rom } = object_det;
            list_show.innerHTML += `<li>
                Brand: ${brand}
                <ol>${model}</ol>
                <ol>${price}</ol>
                <ol>${camera}</ol>
                <ol>${ram}</ol>
                <ol>${rom}</ol>
            </li>
            <br>`;
        });
    }

    function search() {
        let filterBy = document.getElementById('filter').value;
        let searchTerm = document.getElementById('search').value.toLowerCase();

        if (filterBy && searchTerm) {
            let filteredArr = arr.filter((object_det) => {
                return object_det[filterBy].toLowerCase().includes(searchTerm);
            });

            renderList(filteredArr);
        } else {
            alert('Please select a property and enter a search term.');
        }
    }
