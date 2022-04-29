import * as axios from 'axios';
import env from 'react-dotenv';

const instance = axios.create({
  baseURL: env.BACKEND_URL,
  headers: {
    'Authorization': env.AUTH,
  }
});
export const getAllData = async () => {
  const programmingLanguages = (await instance.get('programmingLanguages')).data;
  const faqList = (await instance.get('faqList')).data;
  const professionList = (await instance.get('professionList')).data;
  const partnersEmploymentInfo = (await instance.get('partnersEmploymentInfo')).data;
  const employmentMaterials = (await instance.get('employmentMaterials')).data;
  return { programmingLanguages, faqList, professionList, partnersEmploymentInfo, employmentMaterials };
};

export const createNewEntity = async (entity, entityName) => {
  const newEntity = (await instance.post(entityName, entity)).data;

  return newEntity;
};

export const updateEntity = async (_id, entity, entityName) => {
  const updatedEntity = (await instance.put(`${entityName}/${_id}`, entity)).data;
  return { ...updatedEntity, entity: { _id, ...entity, }, entityName };
};

export const deleteEntity = async (id, entityName) => {
  const deletedEntity = (await instance.delete(`${entityName}/${id}`)).data;

  return deletedEntity;
};