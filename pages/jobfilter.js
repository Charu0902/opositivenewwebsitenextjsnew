import React from "react";
import $ from 'jquery';

import { useEffect } from "react";




const Jobfilter = () =>{
	
    useEffect(() => {
        var data = [
          
            {
                "make": "Sr. SEO Executive",
                "model": "Udaipur + Remote(Hybrid)",
                "type": "2 to 3 years",
                "education":"",
                "link": "/senior-search-engine-optimization-executive",
				"id": 'srseo'
            }
        ];
        var products = "",
	makes = "",
	models = "",
	types = "";

for (var i = 0; i < data.length; i++) {
	var make = data[i].make,
		model = data[i].model,
		type = data[i].type,
		education= data[i].education,
		link = data[i].link,
		id = data[i].id
	
	//create product cards
	products += "<div class='product row position-row' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "'><div class = 'col-md-3 col-sm-12'><p class='position'>" + make + "</p></div><div class = 'col-md-3 col-sm-12'><p class = 'location'>Location: </br><span class = 'city'>" + model + "</span></p></div><div class = 'col-md-3 col-sm-12'><p class = 'experience'>Experience & Qualification:<br/> <span class = 'years-exp'>" + type + ""+education+"</span></p></div><div class = 'col-md-3 col-sm-12'><a class = 'apply-now' id ='"+ id +"' href='" + link + "'>Apply Now</a></div></div></div>";
	
	//create dropdown of makes
	if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
		makes += "<option value='" + make + "'>" + make + "</option>";
	}
	
	//create dropdown of models
	if (models.indexOf("<option value='" + model+"'>" + model + "</option>") == -1) {
		models += "<option value='" + model + "'>" + model + "</option>";
	}
	
	//create dropdown of types
	if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
		types += "<option value='" + type + "'>" + type + "</option>";
	}
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-model").append(models);
$(".filter-type").append(types);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
// $("#search-form").submit(function(e) {
// 	e.preventDefault();
// 	var query = $("#search-form input").val().toLowerCase();

// 	$(".product").hide();
// 	$(".product").each(function() {
// 		var make = $(this).data("make").toLowerCase(),
// 			model = $(this).data("model").toLowerCase(),
// 			type = $(this).data("type").toLowerCase();

// 		if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
// 			$(this).show();
// 		}
// 	});
// });
    });

    return(
        <>
        <div class="container">
	{/* <div class="row" id="search">
		<form id="search-form" action="" method="POST" encType="multipart/form-data">
			<div class="form-group col-xs-9">
				<input class="form-control" type="text" placeholder="Search" />
			</div>
			<div class="form-group col-xs-3">
				<button type="submit" class="btn btn-block btn-primary">Search</button>
			</div>
		</form>
	</div> */}
	<div class="row" id="filter">
		<form className="row">
		<div class="col-md-3 col-sm-12"><p class="filter-by">Filter By</p></div>
			<div class="form-group col-md-3 col-sm-12">
				<select data-filter="make" class="filter-make filter form-select form-control">
					
					<option value="">All Departments</option>
					<option value="">Show All</option>
				</select>

			</div>
			<div class="form-group col-md-3 col-sm-12">
				<select data-filter="model" class="filter-model filter form-select form-control">
					<option value="">Job Locations</option>
					<option value="">Show All</option>
					
				</select>
			</div>
			<div class="form-group col-md-3 col-sm-12">
				<select data-filter="type" class="filter-type filter form-select form-control">
					<option value="">Years of experience</option>
					<option value="">Show All</option>
				</select>
			</div>
			{/* <div class="form-group col-sm-3 col-xs-6">
				<select data-filter="price" class="filter-price filter form-control">
					<option value="">Select Price Range</option>
					<option value="">Show All</option>
				</select>
			</div> */}
		</form>
	</div>
	<div class="row" id="products">
		
	</div>
</div>

        </>
    )
}

export default Jobfilter;

