import { buyerConstants } from '../config';

export function buyerProfile(state={}, action) 
{
	switch(action.type)
	{
		case buyerConstants.CREAT: 
			return 	{
				create: true,
			};
		case buyerConstants.READ:
			return	{
				profile: action.buyer_profile
			};
		case buyerConstants.UPDATE:
			return 	{
				updated: action.msg
			};
		case buyerConstants.DELETE:
			return 	{

			};
		case buyerConstants.ERROR:
			return 	{
				error: action.error
			};
		default:
			return state;
	}
}