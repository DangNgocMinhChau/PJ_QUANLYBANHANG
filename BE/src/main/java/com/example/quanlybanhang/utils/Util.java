package com.example.quanlybanhang.utils;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Util {

    // Split parameters from query String
    public static Map<String,String> splitRequestParamsFromURL(String queryString){
        String[] params = queryString.split("&");
        Map<String,String> listParams = new HashMap<>();

        for(String param:params){
                String name = param.split("=")[0];
                String value = (param.split("=").length == 2) ? param.split("=")[1] : "";
                listParams.put(name,value);
        }
        return listParams;
    }

    //
    public static String convertSortDataWithAlias(String sortString, String alias){
        StringBuilder sortStringWithAlias = new StringBuilder();
        List<String> sortDataSplit = Arrays.asList(sortString.split(","));
        sortDataSplit.forEach(sortItem -> {
            sortStringWithAlias.append(alias);
            sortStringWithAlias.append(".");
            sortStringWithAlias.append(sortItem.trim());
            sortStringWithAlias.append(", ");
        });
        return sortStringWithAlias.toString().substring(0,sortStringWithAlias.toString().length()-2);
    }
}
