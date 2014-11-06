package com.mingyuan.seller.service.test.impl;

import com.mingyuan.seller.dao.test.TestDao;
import com.mingyuan.seller.service.test.TestService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created with IntelliJ IDEA.
 * User: Sguang
 * Date: 14-3-17
 * Time: ионГ12:22
 * To change this template use File | Settings | File Templates.
 */
@Service("testServiceImpl")
public class TestServiceImpl implements TestService {

    @Resource(name = "testDaoImpl")
    private TestDao testDao;

    public String getTestValue(){
        return testDao.getTestValue();
    }
}
