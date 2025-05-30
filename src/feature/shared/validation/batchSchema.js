import * as Yup from 'yup'

export const BatchSchema = Yup.object({
    batchName: Yup.string().required('Batch name is required'),
    batchTime: Yup.string().required('Batch time is required'),
    course: Yup.string().required('Course is required'),
    duration: Yup.string().required('Duration is required'),
    mentor: Yup.string().required('Mentor is required'),
})