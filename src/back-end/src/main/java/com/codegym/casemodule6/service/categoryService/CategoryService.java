package com.codegym.casemodule6.service.serviceDetail;

import com.codegym.casemodule6.model.entity.CategoryService;
import com.codegym.casemodule6.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class ServiceDetail implements IServiceDetail{
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public Iterable<CategoryService> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<CategoryService> findById(Long id) {
        return categoryRepository.findById(id);
    }

    @Override
    public CategoryService save(CategoryService categoryService) {
        return categoryRepository.save(categoryService);
    }

    @Override
    public void remove(Long id) {
        categoryRepository.deleteById(id);
    }
}
