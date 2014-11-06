package com.mingyuan.seller.web.action;

import com.mingyuan.seller.service.test.TestService;
import com.mingyuan.seller.web.action.base.BaseController;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * 注解：控制器名，映射路径，原型实例
 * User: Sguang
 * Date: 14-3-16
 * Time: 下午11:17
 * To change this template use File | Settings | File Templates.
 */
@Controller("testController")
@RequestMapping("/test")
@Scope(value = "prototype")
public class TestController extends BaseController {

    @Resource(name = "testServiceImpl")
    private TestService testService;

    @RequestMapping(value = "/method/{id}", method = RequestMethod.GET)
    public String list(@PathVariable Long id, ModelMap model, HttpServletRequest request) {
        model.addAttribute("str", "SPRING MVC");
        model.addAttribute("id", id);
        model.addAttribute("testValue", testService.getTestValue());
        return "/test/method";
    }
}
