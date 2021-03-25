const LOAD_NUM = 4;
let watcher;


setTimeout(function () {
	new Vue({
		el: "#app",
		data: {
			total: 0,
			products: [],
			cart: [],
			search: 'flower',
			error: '',
			loading: false,
			results:[]
		},
		created(){
			this.onSubmit();
		},
		filters: {
			formatPrice(price) {
				return "$".concat(price.toFixed(2))
			}
		},
		methods: {
			addToCart(product) {
				this.total += product.price;
				let found = false;
				for (let i = 0; i < this.cart.length; i++) {
					if (this.cart[i].id === product.id) {
						found = true;
						this.cart[i].qty += 1
					}
				}

				if (!found) {
					this.cart.push({...product, qty: 1})
				}

			},
			inc(item) {
				item.qty += 1;
				this.total += item.price;
			},
			dec(item) {
				this.total -= item.price;
				if (item.qty > 1) {
					item.qty -= 1
				} else {
					let i = this.cart.indexOf(item);
					this.cart.splice(i, 1);
				}
			},
			onSubmit() {
				this.products = [];
				this.results = [];
				this.loading = true;
				let path = '/search/?q='.concat(this.search);
				this.$http.get(path)
					.then(response => {
						if (response.body.length) {
							this.results = response.body;
							this.appendResults()
							this.loading = false;
						} else {
							this.loading = false;
							this.error = this.search + ' Not Found';
						}
					})
			},
			appendResults(){
				console.log('ccc')
				if(this.products.length < this.results.length){
					let toAppend = this.results.slice(
						this.products.length,
						LOAD_NUM + this.products.length);

					this.products = this.products.concat(toAppend)
				}
			}

		},
		updated() {
			let sensor = document.querySelector("#scrollingBottom");
			watcher = scrollMonitor.create(sensor);
			watcher.enterViewport(this.appendResults);
		},
		beforeUpdate() {
			if(watcher){
				watcher.destroy();
				watcher = null;
			}
		}
	});
},3000);
