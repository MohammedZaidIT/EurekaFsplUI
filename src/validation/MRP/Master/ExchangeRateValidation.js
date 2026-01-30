export const ExchangeRateValidation=(formData)=>{
    const errors={};
    if (!formData.import_rate){
        errors.import_rate="Required"
    }
    if(formData.currency_unit && formData.currency_unit.length > 5){
        errors.currency_unit="No more than 5 characters Allowed"
    }
    if (!formData.export_rate){
        errors.export_rate="Required"
    }
    if (!formData.CostingExportRate){
        errors.CostingExportRate="Required"
    }
    if (!formData.currency_unit){
        errors.currency_unit="Required"
    }
    if (!formData.currency_name){
        errors.currency_name="Required"
    }
    return errors;
}