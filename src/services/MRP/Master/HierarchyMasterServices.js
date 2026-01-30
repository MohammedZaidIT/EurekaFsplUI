import { HierarchyMasterApi,HierarchySaveApi,HierarchyUpdateApi } from "../../../api/MRP/Master/HierarchyMasterApi";

export const HierarchyMasterServices = () => HierarchyMasterApi();

export const HierarchySaveServices = (payload) => {
  return HierarchySaveApi(payload);
};

export const HierarchyUpdateServices=(id,payload)=>{
  return HierarchyUpdateApi(id,payload);
}