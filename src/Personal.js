const _private = new WeakMap();

// eslint-disable-next-line no-unused-vars
class Personal {
    constructor(name, age, email, phone) {
        const properties = {
            _name: name,
            _age: age,
            _email: email,
            _phone: phone
        };

        _private.set(this, { properties });
    }
    get name() {
        return _private.get(this).properties['_name'];
    }
    set name(name) {
        _private.get(this).properties['_name'] = name;
    }

    showData() {
        const { _name, _age, _email, _phone } = _private.get(this).properties;
        return `Name: ${_name}, Age: ${_age}, Email: ${_email}, Phone: ${_phone}`;
      }
    
}
export { Personal };