import { buyerConstants } from '../config';

export function buyer(state={}, action) 
{
	switch(action.type)
	{
		case buyerConstants.CREATE_BUYPER_PROFILE: 
			return 	{
				create: true,
			};
		case buyerConstants.READ_BUYPER_PROFILE:
			return	{
				profile: action.data,
			};
		case buyerConstants.UPDATE_BUYPER_PROFILE:
			return 	{
				updated: action.data.message
			};
		case buyerConstants.DELETE_BUYPER_PROFILE:
			return 	{

			};
		case buyerConstants.CREAT_CAMPAIGN:
			return {

			}
		case buyerConstants.GET_ALL_CAMPAIGN:
			return {
				campaigns: action.data
			}
		case buyerConstants.UPDATE_CAMPAIGN: 
			return {

			}
		case buyerConstants.DELETE_CAMPAIGN:
			return {

			}	
		case buyerConstants.ERROR:
			return 	{
				error: action.data
			};

		default:
			return state;
	}
}

export function buyerSavedAdzas(state={}, action) 
{
	switch(action.type)
	{
		case buyerConstants.FETCH_SAVED_ADZA:
			return { adzas: action.adzas };
		default:
			return state;
	}
}

