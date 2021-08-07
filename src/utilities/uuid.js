const { v4: uuidv4 } = require('uuid')

// genera un codigo uuid y retorna el primer conjunto separado por - 
exports.generateId = () => {
    return uuidv4()
}