import { useQuery } from "@tanstack/react-query";
import { fetchAccordionDetails} from "../util/http";

export function useAccordion(){
    return useQuery({
        queryFn: fetchAccordionDetails,
        queryKey:'accordion'
    });
}
export default useAccordion;