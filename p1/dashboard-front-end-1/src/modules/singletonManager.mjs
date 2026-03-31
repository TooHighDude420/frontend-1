class SingletonManager {
    instances = [];

    addInstance(name, instance) {
        const exists = this.instances.some(elm => elm.name === name)
        if (exists) {
            console.warn(`Instance "${name}" already exists`)
            return
        }
        this.instances.push({ name, instance })
    }

    getInstance(name) {
        const found = this.instances.find(elm => elm.name === name)
        return found ? found.instance : null
    }
}

export default SingletonManager