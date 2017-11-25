import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		saveAuthor(name, lastName) {
			this.store.createRecord('author', {
				name,
				lastName
			}).save().then(()=>{
				this.set('name', null);
				this.set('lastName', null);
				swal(
					'Autor Registrado',
					'',
					'success'
				).then(()=>{
					Ember.$('#editorial-modal').modal('close');
				});
			})
		},
		saveEditorial(name, image) {
			this.store.createRecord('editorial', {
				name,
				image
			}).save().then(()=>{
				this.set('editorialName', null);
				this.set('editorialImg', null);
				swal(
					'Editorial Registrada',
					'',
					'success'
				).then(()=>{
					Ember.$('#editorial-modal').modal('close');
				});
			});
		},
		saveGenre(name) {
			this.store.createRecord('genre', {
				name
			}).save().then(()=>{
				this.set('genreName', null);
				swal(
					'Género Registrado',
					'',
					'success'
				).then(()=>{
					Ember.$('#genre-modal').modal('close');
				});
			});
		},
		saveBook(title, description, edition, year, isbn, cover, copies, author, editorial) {
			this.store.createRecord('book', {
				title: 'wa',
				description: 'wa',
				edition: 'wa',
				year: 2000,
				isbn: 1000,
				cover: 'wa',
				copies: 2,
				status: 1,
				author,
				editorial
			}).save().then(() => {
				swal(
					'Libro Registrado',
					'',
					'success'
				).then(() => {
					this.transitionToRoute('admin/books');
				})
			})
		}
	}
});
	