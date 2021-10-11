package com.example.quanlybanhang.common;

public class PaginationDto {
    private Integer currentPage;
    private Integer pageSize;
    private Integer total;

    public PaginationDto(Integer currentPage, Integer pageSize, Integer total) {
        super();
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.total = total;
    }

    public Integer getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }
}
