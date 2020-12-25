(function($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	/////////////////////////////////////////

	// Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs',
  });

	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

	/////////////////////////////////////////

	// Input number
	$('.input-number').each(function() {
		var $this = $(this),
		$input = $this.find('input[type="number"]'),
		up = $this.find('.qty-up'),
		down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})
	});

	var priceInputMax = document.getElementById('price-max'),
			priceInputMin = document.getElementById('price-min');

	priceInputMax.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	priceInputMin.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	function updatePriceSlider(elem , value) {
		if ( elem.hasClass('price-min') ) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if ( elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1, 999],
			connect: true,
			step: 1,
			range: {
				'min': 1,
				'max': 999
			}
		});

		priceSlider.noUiSlider.on('update', function( values, handle ) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

})(jQuery);


//Implementacion Santiago

productos = [
	{
		categoria: "Smartphones", 
		nombres: "Samsung A30S",
		precioActual: "729900",
		precioSinOferta: "749.900",
		imagenAsociada: "Samsung A30S.jpg",
		marca: "samsung"

	},
	{
		categoria: "Smartphones", 
		nombres: "Motorola One Hyper 128GB",
		precioActual: "1499900",
		precioSinOferta: "1.599.900",
		imagenAsociada: "Motorola One Hyper 128GB.jpg",
		marca: "motorola"
	},
	{
		categoria: "Smartphones", 
		nombres: "Asus Zenfone Max M2",
		precioActual: "689900",
		precioSinOferta: "1.299.900",
		imagenAsociada: "Asus Zenfone Max M2.jpg",
		marca: "asus"

	}, 
	{

		categoria: "Smartphones", 
		nombres: "Nokia 6.2 64gb",
		precioActual: "649900",
		precioSinOferta: "999.900",
		imagenAsociada: "Nokia 6.2 64gb.jpg",
		marca: "nokia"

	}, 
	{

		categoria: "Smartphones", 
		nombres: "Alcatel 3X 2019 G4 GB",
		precioActual: "499900",
		precioSinOferta: "749.900",
		imagenAsociada: "Alcatel 3X 2019 G4 GB.jpg",
		marca: "alcatel"

	},
	{

		categoria: "Smartphones", 
		nombres: "iPhone SE 64GB Rojo",
		precioActual: "2169000",
		precioSinOferta: "2.299.900",
		imagenAsociada: "iPhone SE 64GB Rojo.jpg",
		marca: "apple"

	},
	{

		categoria: "Smartphones", 
		nombres: "Xioami Redmi Note 8 128Gb",
		precioActual: "778900",
		precioSinOferta: "1.249.900",
		imagenAsociada: "Xiami Redmi Note 8 128Gb.jpg",
		marca: "xiaomi"

	},
	{

		categoria: "Smartphones", 
		nombres: "Xiaomi REDMI 8A 32BG",
		precioActual: "429900",
		precioSinOferta: "599.900",
		imagenAsociada: "Xiaomi REDMI 8A 32BG.jpg",
		marca: "xiaomi"

	},
	{

		categoria: "Smartphones", 
		nombres: "Xiaomi REDMI 8 64gb",
		precioActual: "519900",
		precioSinOferta: "949.900",
		imagenAsociada: "Xiaomi REDMI 8 64gb.jpg",
		marca: "xiaomi"

	}

]

var productosContendedor = $(".row.listaProductos");

insertProductsSmartphones(productos, productosContendedor);

$("#filtroPrecios").on("change", function(){

	var precios = [];
	var ordenamientoProductos = [];	
	var contadorPrecios = 0;
	var mapped;
	var contadorMapped = 0;

	for (let i in productos) {

		precios.push(productos[contadorPrecios].precioActual);

		contadorPrecios++
	}

	if ($(this).val() == 0) {

		mapped = precios.map(function(el, i) {
		    return { index: i, value: el };
		})

		mapped.sort(function(a, b) {
		    return b.value - a.value;
		});


		ordenamientoProductos = [];

		for (let i in mapped) {

			ordenamientoProductos.push(productos[mapped[contadorMapped].index]);

			contadorMapped++

		}

		productosContendedor.html("");

		insertProductsSmartphones(ordenamientoProductos, productosContendedor);



	} else {

		mapped = precios.map(function(el, i) {
		    return { index: i, value: el };
		})

		mapped.sort(function(a, b) {
		    return a.value - b.value;
		});

		ordenamientoProductos = [];

		for (let i in mapped) {

			ordenamientoProductos.push(productos[mapped[contadorMapped].index]);

			contadorMapped++

		}

		productosContendedor.html("");

		insertProductsSmartphones(ordenamientoProductos, productosContendedor);


	}

	console.log("prueba cambio", $(this).val());

});


$("#mostrarCantidad").on("change", function(){

	$(this).val();

	if ($(this).val() == 3){

		productosContendedor.children(".productoContenedor").each(function(i,item){

			if (i > 2){

				$(item).css("display", "none");
			}else{

				$(item).css("display", "block");
			}

		});

	}else if($(this).val() == 6){

			productosContendedor.children(".productoContenedor").each(function(i,item){

			if (i > 5){

				$(item).css("display", "none");
			}else{

				$(item).css("display", "block");
			}

		});


	}else{
			productosContendedor.children(".productoContenedor").each(function(i,item){

			if (i > 8){

				$(item).css("display", "none");
			}else{

				$(item).css("display", "block");
			}

		});


	}



});


var marcasArray = [];

$(".filtroMarcas").on("change", function(){

	if ($(this).is(":checked")){

		marcasArray.push($(this).val());

		console.log("Listo");

	}else{

		var index = marcasArray.indexOf($(this).val());

		if (index > -1){

			marcasArray.splice(index, 1);

		}
	}

	if (marcasArray.length > 0){

		$(`.productoContenedor`).css("display", "none");

		for (let i = 0; i < marcasArray.length; i++) {

			console.log("valor array", i);

			$(`.productoContenedor[data-producto="${marcasArray[i]}"]`).css("display", "block");

		}

	}else{

		$(`.productoContenedor`).css("display", "block");
	
	}
	
	console.log("Marcas array", marcasArray);

});

function insertProductsSmartphones(productos, productosContendedor){

	var contProductos = 0;

	for (let i in productos) {

		productosContendedor.append(`

			<div class="col-md-4 col-xs-6 productoContenedor" data-producto="${productos[contProductos].marca}">
				<div class="product">
					<div class="product-img">
						<img src="./img/${productos[contProductos].imagenAsociada}" alt="">
						<div class="product-label">
							<span class="new">NEW</span>
						</div>
					</div>
					<div class="product-body">
						<p class="product-category">${productos[contProductos].categoria}</p>
						<h3 class="product-name"><a href="#">${productos[contProductos].nombres}</a></h3>
						<h4 class="product-price">${productos[contProductos].precioActual} <del class="product-old-price">${productos[contProductos].precioSinOferta}</del></h4>
						<div class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
						</div>
						<div class="product-btns">
							<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
									class="tooltipp">Añadir al carrito</span></button>
							<button class="add-to-compare"><i class="fa fa-exchange"></i><span
									class="tooltipp">Comparar</span></button>
							<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Vista
									Rapida</span></button>
						</div>
					</div>
					<div class="add-to-cart">
						<button class="add-to-cart-btn">
						<i class="fa fa-shopping-cart"></i>Añadir al Carrito</button>
					</div>
				</div>
			</div>

		 `);


		console.log(contProductos, i.nombres);

		contProductos++
	}	
}