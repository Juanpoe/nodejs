const {Router}=require ('express')
const { getAgendamientos, postAgendamientos, deleteAgendamientos, putAgendamientos, patchAgendamientos, postEncuesta, putEncuesta, patchEncuesta, deleteEncuesta, getPromedioEncuesta } = require('../controllers/encuesta')
const { getEncuesta } = require('../controllers/encuesta')
const router = Router()// Obtener la función Router


router.get('/',getEncuesta)
router.post('/',postEncuesta)
router.put('/',putEncuesta)
router.patch('/',patchEncuesta)
router.delete('/',deleteEncuesta)



module.exports = router