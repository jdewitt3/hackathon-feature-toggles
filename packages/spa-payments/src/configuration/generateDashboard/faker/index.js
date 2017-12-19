import faker from 'faker';

const createFakeRowObjectData = (index) => {
	const budgetMin = faker.random.number({ min: 0, max: 500 });
	const budgetMax = budgetMin + faker.random.number({ min: 0, max: 2000 });

	return {
		id: index,
		avatar: faker.image.avatar(),
		city: faker.address.city(),
		email: faker.internet.email(),
		name: `${faker.name.firstName()} ${faker.name.lastName()}`,
		street: faker.address.streetName(),
		zipCode: faker.address.zipCode(),
		date: faker.date.past(),
		bs: faker.company.bs(),
		catchPhrase: faker.company.catchPhrase(),
		companyName: faker.company.companyName(),
		words: faker.lorem.words(),
		sentence: faker.lorem.sentence(),
		checked: false,
		budgetMin,
		budgetMax,
		project: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
		status: faker.random.arrayElement([
			'scheduled',
			'pending_agreement',
			'pending_work_completion',
			'pending_approval',
			'pending_your_approval',
			'paid',
			'past_due',
			'paused',
		]),
		characters: new Array(Math.ceil(Math.random() * 10)).fill('').reduce((acc) => {
			return acc.concat([`${faker.name.firstName()} ${faker.name.lastName()}`]);
		}, []),
		recurrence: faker.random.arrayElement([true, false, false, false, false, false, false]),
	};
};


class FakeData {
	constructor (size) {
		this.size = size || 2000;
		this._cache = [];
	}

	getObjectAt (index) {
		if (index < 0 || index > this.size) {
			return undefined;
		}
		if (this._cache[index] === undefined) {
			this._cache[index] = createFakeRowObjectData(index);
		}
		return this._cache[index];
	}

	getObjectsThrough (min, max) {
		const fakeArray = [];
		for (let i = Number(min); i < Number(max); i++) {
			fakeArray.push(this.getObjectAt(i));
		}
		return fakeArray;
	}

	setObjectAt (index, key, value) {
		if (index < 0 || index > this.size) {
			return undefined;
		}
		if (this._cache[index] === undefined) {
			this._cache[index] = createFakeRowObjectData(index);
		}
		if (this._cache[index][key] === true || this._cache[index][key] === false) {
			this._cache[index][key] = !this._cache[index][key];
		} else this._cache[index][key] = value;
		return this;
	}

	getAll () {
		if (this._cache.length < this.size) {
			for (let i = 0; i < this.size; i++) {
				this.getObjectAt(i);
			}
		}
		return this._cache.slice();
	}

	setAll (key, value) {
		this.getAll();
		this._cache.forEach((row) => {
			row[key] = value;
		});
		return this._cache.slice();
	}

	getSize () {
		return this.size;
	}
}

export default FakeData;
